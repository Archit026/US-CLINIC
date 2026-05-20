/**
 * An appointment is "previous" if it was completed, cancelled,
 * or the scheduled time has already passed.
 */
export const isPreviousAppointment = (appt) => {
  const status = (appt.status || '').toLowerCase();
  if (status === 'completed' || status === 'cancelled') {
    return true;
  }
  if (appt.time && new Date(appt.time) < new Date()) {
    return true;
  }
  return false;
};

export const isActiveAppointment = (appt) => !isPreviousAppointment(appt);

export const sortAppointmentsByDate = (appointments, descending = true) => {
  return [...appointments].sort((a, b) => {
    const dateA = new Date(a.time).getTime();
    const dateB = new Date(b.time).getTime();
    return descending ? dateB - dateA : dateA - dateB;
  });
};

const sameId = (a, b) => a != null && b != null && String(a) === String(b);

export const filterAppointmentsForUser = (appointments, user) => {
  if (!user?._id) return [];
  if (user.role === 'doctor') {
    return appointments.filter(
      (appt) => appt.doctor && sameId(appt.doctor._id, user._id)
    );
  }
  if (user.role === 'patient') {
    return appointments.filter(
      (appt) => appt.patient && sameId(appt.patient._id, user._id)
    );
  }
  return [];
};
