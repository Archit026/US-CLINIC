import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';
import Profile from './pages/Profile';
import DoctorsPage from './pages/DoctorsPage';
import PreviousAppointments from './pages/PreviousAppointments';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/admin' element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
        <Route path='/doctor' element={<ProtectedRoute allowedRoles={['doctor']}><DoctorDashboard /></ProtectedRoute>} />
        <Route path='/patient' element={<ProtectedRoute allowedRoles={['patient']}><PatientDashboard /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute allowedRoles={['doctor', 'patient']}><Profile /></ProtectedRoute>} />
        <Route path='/doctors' element={<ProtectedRoute allowedRoles={['doctor', 'patient']}><DoctorsPage /></ProtectedRoute>} />
        <Route path='/previous-appointments' element={<ProtectedRoute allowedRoles={['doctor', 'patient']}><PreviousAppointments /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;