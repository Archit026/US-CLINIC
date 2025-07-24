# US-CLINIC

US-CLINIC is a modern, full-stack clinic management system designed for single-doctor clinics. It provides seamless appointment booking with integrated payments, user authentication, and role-based dashboards.

---

## Features

- **Single Doctor System**
  - Designed specifically for clinics with one primary doctor
  - Admin can register only one doctor in the system
  - All appointments are automatically routed to the primary doctor

- **User Authentication**
  - Secure signup and login for patients and admin
  - Role-based access control (Patient/Doctor/Admin)

- **Appointment Management**
  - Online appointment booking with integrated payment
  - Real-time availability checking
  - Appointment status tracking (pending/confirmed/cancelled/completed)
  - Real-time notifications for status changes

- **Payment Integration**
  - Secure payment processing using Razorpay
  - Instant payment confirmation
  - Payment status tracking
  - Configurable appointment fees

- **Role-Based Dashboards**
  - **Patient Dashboard:** Book appointments, make payments, view history
  - **Doctor Dashboard:** Manage appointments, update statuses
  - **Admin Dashboard:** Manage doctor profile and system settings

---

## Tech Stack

- **Frontend:** React, React Router
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Payment Gateway:** Razorpay
- **Email Service:** Resend for notifications
- **Other:** dotenv, cors

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or cloud)
- Razorpay account and API keys
- Resend account for email notifications

### 1. Clone the Repository

```bash
git clone https://github.com/Anshul-18/US-CLINIC.git
cd US-CLINIC
```

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Environment Variables

Create a `.env` file in the `backend` directory:

```env
RESEND_API_KEY=your_resend_api_key_here
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
APPOINTMENT_FEE=100
```

#### Start MongoDB

Make sure MongoDB is running locally or update the connection string in `backend/config/db.js` for your setup.

#### Start Backend Server

```bash
npm run dev
```

The backend will run on [http://localhost:5000](http://localhost:5000).

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The frontend will run on [http://localhost:3000](http://localhost:3000).


---

## Payment Integration

### Razorpay Setup

1. Create a Razorpay account at [razorpay.com](https://razorpay.com)
2. Get your API keys from the dashboard
3. Add them to your `.env` file

### Payment Flow

1. Patient selects appointment time
2. Razorpay payment popup appears
3. Upon successful payment:
   - Payment is verified
   - Appointment is created
   - Confirmation notifications are sent

---

## Project Structure

```
US-CLINIC/
  backend/
    config/
    controllers/
    helpers/
    models/
    routes/
    server.js
    .env
  frontend/
    src/
      pages/
      styles/
      utils/
      App.js
      index.js
    public/
  README.md
```

---

## API Endpoints

### Auth

- `POST /auth/signup` — Register new user (triggers email verification)
- `POST /auth/verify-email` — Verify OTP code
- `POST /auth/login` — Login (only after verification)
- `GET /auth/doctors` — List all doctors

### Appointments

- `POST /appointments/create` — Book appointment
- `GET /appointments/all` — Get all appointments (admin/doctor)
- `PATCH /appointments/status/:appointmentId` — Update appointment status
- ...and more (see `backend/routes/appointmentRoutes.js`)

---

## Customization

- **Email Templates:** Edit `backend/helpers/sendVerificationEmail.js` for custom email content.
- **Roles:** Extend user roles and permissions in `backend/models/User.js` and related controllers.
- **UI:** Update React components and styles in `frontend/src/pages` and `frontend/src/styles`.

---

## Security Notes

- Passwords are stored in plain text for demo purposes. **Use hashing (bcrypt) in production.**
- Add rate limiting and validation for production deployments.

---

## System Limitations

- **Single Doctor:** The system is designed for clinics with one doctor only
- **Payment Required:** All appointments require upfront payment
- **Fixed Fees:** Appointment fees are set globally in environment variables

---

## License

This project is for educational/demo purposes. For production use, please review and enhance security, validation, and error handling.

---

## Acknowledgements

- [Create React App](https://create-react-app.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Razorpay] (https://razorpay.com/)

---

## Contact

For questions or contributions, please open an issue or contact the maintainer.
