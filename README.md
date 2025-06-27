# US-CLINIC

US-CLINIC is a modern, full-stack clinic management system designed for dental and general healthcare clinics. It provides seamless appointment booking, user authentication with email verification, and role-based dashboards for patients, doctors, and admins.

---

## Features

- **User Authentication**
  - Secure signup and login for patients, doctors, and admins
  - Email verification using Resend OTP (One-Time Password)
- **Role-Based Dashboards**
  - **Patient Dashboard:** Book appointments, view history, receive notifications
  - **Doctor Dashboard:** Manage appointments, update statuses, reschedule, and view patient info
  - **Admin Dashboard:** Manage doctors, view all registered doctors
- **Appointment Management**
  - Book, confirm, complete, cancel, and reschedule appointments
  - Real-time notifications for status changes
- **Responsive UI**
  - Modern, mobile-friendly React frontend
- **API & Backend**
  - RESTful API built with Express.js and MongoDB (Mongoose)
  - Modular controllers and routes for scalability

---

## Tech Stack

- **Frontend:** React, React Router
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Email Service:** [Resend](https://resend.com/) for OTP verification
- **Other:** dotenv, cors

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud)
- [Resend](https://resend.com/) account and API key

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/US-CLINIC.git
cd US-CLINIC
```

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Environment Variables

Create a `.env` file in the `backend` directory:

```
RESEND_API_KEY=your_resend_api_key_here
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

## Email Verification with Resend

- On signup, users receive a 6-digit OTP via email (using Resend).
- Users must verify their email before logging in.
- The OTP expires after 10 minutes for security.

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

## License

This project is for educational/demo purposes. For production use, please review and enhance security, validation, and error handling.

---

## Acknowledgements

- [Resend](https://resend.com/) for email delivery
- [Create React App](https://create-react-app.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)

---

## Contact

For questions or contributions, please open an issue or contact the maintainer.
