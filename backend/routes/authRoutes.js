const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const { authMiddleware, authorizeRole } = require('../middleware/auth');
const { 
  validateSignup, 
  validateLogin, 
  validateUserId,
  handleValidationErrors 
} = require('../middleware/validation');

/**
 * SECURITY FIX #3: Generate JWT Token
 */
const generateToken = (userId, role) => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
};

/**
 * SECURITY FIX #2, #3: Sign Up with Password Hashing & JWT
 */
router.post('/signup', validateSignup, handleValidationErrors, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: 'Email already registered' 
      });
    }
    
    // Create new user (password will be hashed by pre-save middleware)
    const user = new User({ name, email, password, role });
    await user.save();
    
    // Generate JWT token
    const token = generateToken(user._id, user.role);
    
    // Return user without password
    const userObj = user.toJSON();
    
    res.status(201).json({ 
      success: true,
      message: 'Registration successful',
      token,
      user: userObj 
    });
  } catch (error) {
    console.error('Signup error:', error);
    
    // Don't expose internal error details
    let message = 'Registration failed';
    if (error.code === 11000) {
      message = 'Email already in use';
    }
    
    res.status(500).json({ 
      success: false,
      message 
    });
  }
});

/**
 * SECURITY FIX #2, #3: Login with Password Verification & JWT
 */
router.post('/login', validateLogin, handleValidationErrors, async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    // Find user by email and role
    const user = await User.findOne({ email, role }).select('+password');
    
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid email or password' 
      });
    }
    
    // Verify password using bcrypt comparison
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid email or password' 
      });
    }
    
    // Generate JWT token
    const token = generateToken(user._id, user.role);
    
    // Return user without password
    const userObj = user.toJSON();
    
    res.json({ 
      success: true,
      message: 'Login successful',
      token,
      user: userObj 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Login failed. Please try again.' 
    });
  }
});

/**
 * SECURITY FIX #7: Protected route - Get all doctors with authorization
 */
router.get('/doctors', authMiddleware, async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' })
      .select('-password')
      .select('-email'); // Optional: Hide emails from public listing
    
    res.json({ 
      success: true,
      doctors 
    });
  } catch (error) {
    console.error('Get doctors error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch doctors' 
    });
  }
});

/**
 * SECURITY FIX #7: Protected route - Delete doctor (admin/doctor only)
 */
router.delete('/doctors/:id', 
  authMiddleware, 
  authorizeRole('doctor'), // Only doctors can manage doctor accounts
  validateUserId,
  handleValidationErrors,
  async (req, res) => {
  try {
    // Security: Only allow users to delete their own account or admin users
    if (req.user.userId !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({ 
        success: false,
        message: 'You do not have permission to delete this account' 
      });
    }

    const doctor = await User.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ 
        success: false,
        message: 'Doctor not found' 
      });
    }

    res.json({ 
      success: true,
      message: 'Doctor account deleted successfully' 
    });
  } catch (error) {
    console.error('Delete doctor error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to delete doctor' 
    });
  }
});

/**
 * SECURITY FIX #3, #7: Protected route - Get user profile
 */
router.get('/profile/:id', 
  authMiddleware,
  validateUserId,
  handleValidationErrors,
  async (req, res) => {
  try {
    // Security: Only allow users to view their own profile unless admin
    if (req.user.userId !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({ 
        success: false,
        message: 'You do not have permission to view this profile' 
      });
    }

    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'User not found' 
      });
    }

    res.json({ 
      success: true,
      user 
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch profile' 
    });
  }
});

/**
 * SECURITY FIX #3, #7: Protected route - Update user profile
 */
router.put('/profile/:id', 
  authMiddleware,
  validateUserId,
  handleValidationErrors,
  async (req, res) => {
  try {
    const { name, email, age, phone, gender, address } = req.body;
    
    // Security: Only allow users to update their own profile
    if (req.user.userId !== req.params.id) {
      return res.status(403).json({ 
        success: false,
        message: 'You can only update your own profile' 
      });
    }

    // Check if email is being changed and already exists
    if (email) {
      const existingUser = await User.findOne({ 
        email, 
        _id: { $ne: req.params.id } 
      });
      if (existingUser) {
        return res.status(400).json({ 
          success: false,
          message: 'Email already in use' 
        });
      }
    }

    // Prepare update data (only allow specific fields)
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (age !== undefined) updateData.age = age;
    if (phone) updateData.phone = phone;
    if (gender) updateData.gender = gender;
    if (address) updateData.address = address;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedUser) {
      return res.status(404).json({ 
        success: false,
        message: 'User not found' 
      });
    }

    res.json({ 
      success: true,
      message: 'Profile updated successfully', 
      user: updatedUser 
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to update profile' 
    });
  }
});

module.exports = router;