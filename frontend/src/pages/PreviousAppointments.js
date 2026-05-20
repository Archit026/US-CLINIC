import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getUser } from '../utils/auth';
import { API_URL } from '../config/api';
import DashboardLayout from '../components/DashboardLayout';
import doctorDashboardStyles from '../styles/doctorDashboardStyles';
import {
  isPreviousAppointment,
  sortAppointmentsByDate,
  filterAppointmentsForUser,
} from '../utils/appointmentUtils';

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'completed', label: 'Completed' },
  { id: 'cancelled', label: 'Cancelled' },
  { id: 'past', label: 'Past (no show)' },
];

const PreviousAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [expandedAppointment, setExpandedAppointment] = useState(null);
  const user = getUser();
  const userId = user?._id;
  const userRole = user?.role;

  useEffect(() => {
    let cancelled = false;

    const loadAppointments = async () => {
      const currentUser = getUser();
      if (!currentUser?._id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/appointments/all`);
        if (cancelled) return;

        const data = res.data.appointments || res.data;
        const mine = filterAppointmentsForUser(data, currentUser);
        const previous = mine.filter(isPreviousAppointment);
        setAppointments(sortAppointmentsByDate(previous));
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to fetch previous appointments:', error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadAppointments();
    return () => {
      cancelled = true;
    };
  }, [userId, userRole]);

  const filteredAppointments = useMemo(() => {
    if (filter === 'all') return appointments;
    if (filter === 'completed') {
      return appointments.filter((a) => a.status?.toLowerCase() === 'completed');
    }
    if (filter === 'cancelled') {
      return appointments.filter((a) => a.status?.toLowerCase() === 'cancelled');
    }
    if (filter === 'past') {
      return appointments.filter((a) => {
        const status = (a.status || '').toLowerCase();
        return status !== 'completed' && status !== 'cancelled' && new Date(a.time) < new Date();
      });
    }
    return appointments;
  }, [appointments, filter]);

  const stats = useMemo(() => ({
    total: appointments.length,
    completed: appointments.filter((a) => a.status?.toLowerCase() === 'completed').length,
    cancelled: appointments.filter((a) => a.status?.toLowerCase() === 'cancelled').length,
  }), [appointments]);

  const getStatusStyle = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'confirmed':
        return doctorDashboardStyles.statusConfirmed;
      case 'pending':
        return doctorDashboardStyles.statusPending;
      case 'completed':
        return doctorDashboardStyles.statusCompleted;
      case 'cancelled':
        return doctorDashboardStyles.statusCancelled;
      default:
        return doctorDashboardStyles.statusPending;
    }
  };

  const toggleDetails = (id) => {
    setExpandedAppointment(expandedAppointment === id ? null : id);
  };

  const dashboardPath = user?.role === 'doctor' ? '/doctor' : '/patient';
  const isDoctor = user?.role === 'doctor';

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ color: '#0B1D3A', fontSize: '28px', fontWeight: '800', margin: '0 0 8px 0' }}>
          Previous Appointments
        </h2>
        <p style={{ color: '#64748B', margin: '0 0 12px 0' }}>
          {isDoctor
            ? 'View past visits with patients — completed, cancelled, or missed appointments.'
            : 'View your past visits — completed, cancelled, or appointments that have passed.'}
        </p>
        <Link
          to={dashboardPath}
          style={{
            color: '#2563EB',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          ← Back to active appointments
        </Link>
      </div>

      <div style={doctorDashboardStyles.statsContainer}>
        <div style={doctorDashboardStyles.statCard}>
          <div style={doctorDashboardStyles.statNumber}>{stats.total}</div>
          <div style={doctorDashboardStyles.statLabel}>Total Past</div>
        </div>
        <div style={doctorDashboardStyles.statCard}>
          <div style={doctorDashboardStyles.statNumber}>{stats.completed}</div>
          <div style={doctorDashboardStyles.statLabel}>Completed</div>
        </div>
        <div style={doctorDashboardStyles.statCard}>
          <div style={doctorDashboardStyles.statNumber}>{stats.cancelled}</div>
          <div style={doctorDashboardStyles.statLabel}>Cancelled</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setFilter(opt.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              border: filter === opt.id ? '1px solid #2563EB' : '1px solid #E2E8F0',
              background: filter === opt.id ? '#EFF6FF' : '#FFFFFF',
              color: filter === opt.id ? '#1D4ED8' : '#64748B',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={doctorDashboardStyles.emptyState}>
          <div style={doctorDashboardStyles.emptyStateText}>Loading appointments…</div>
        </div>
      ) : filteredAppointments.length === 0 ? (
        <div style={doctorDashboardStyles.emptyState}>
          <div style={doctorDashboardStyles.emptyStateIcon}>📋</div>
          <div style={doctorDashboardStyles.emptyStateText}>No previous appointments</div>
          <div style={doctorDashboardStyles.emptyStateSubtext}>
            {filter === 'all'
              ? 'Completed, cancelled, or past appointments will appear here.'
              : `No appointments match the "${FILTER_OPTIONS.find((o) => o.id === filter)?.label}" filter.`}
          </div>
        </div>
      ) : (
        <div style={doctorDashboardStyles.appointmentsList}>
          {filteredAppointments.map((appt) => (
            <div
              key={appt._id}
              style={doctorDashboardStyles.appointmentListItem}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
                e.currentTarget.style.borderColor = '#CBD5E1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.06)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div
                style={doctorDashboardStyles.appointmentHeader}
                onClick={() => toggleDetails(appt._id)}
              >
                <div style={doctorDashboardStyles.appointmentMainInfo}>
                  <div style={doctorDashboardStyles.appointmentDateBadge}>
                    <div style={doctorDashboardStyles.dateDay}>
                      {new Date(appt.time).getDate()}
                    </div>
                    <div style={doctorDashboardStyles.dateMonth}>
                      {new Date(appt.time).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div style={doctorDashboardStyles.appointmentSummary}>
                    <div style={doctorDashboardStyles.patientName}>
                      {isDoctor
                        ? appt.patient?.name || 'Unknown patient'
                        : `Dr. ${appt.doctor?.name || 'Unknown'}`}
                    </div>
                    <div style={doctorDashboardStyles.appointmentTime}>
                      {new Date(appt.time).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                      {' · '}
                      {new Date(appt.time).getFullYear()}
                    </div>
                  </div>
                </div>
                <div style={doctorDashboardStyles.appointmentActions}>
                  <span
                    style={{
                      ...doctorDashboardStyles.statusBadge,
                      ...getStatusStyle(appt.status),
                    }}
                  >
                    {appt.status}
                  </span>
                  <div style={doctorDashboardStyles.expandButton}>
                    <span
                      style={{
                        ...doctorDashboardStyles.expandIcon,
                        transform:
                          expandedAppointment === appt._id ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      ▼
                    </span>
                  </div>
                </div>
              </div>

              {expandedAppointment === appt._id && (
                <div style={doctorDashboardStyles.appointmentDetails}>
                  <div style={doctorDashboardStyles.detailsGrid}>
                    <div style={doctorDashboardStyles.detailItem}>
                      <div style={doctorDashboardStyles.detailLabel}>
                        {isDoctor ? 'Patient' : 'Doctor'}
                      </div>
                      <div style={doctorDashboardStyles.detailValue}>
                        {isDoctor ? (
                          <>
                            <div style={doctorDashboardStyles.patientFullName}>
                              {appt.patient?.name}
                            </div>
                            <div style={doctorDashboardStyles.patientEmail}>
                              {appt.patient?.email}
                            </div>
                          </>
                        ) : (
                          <>
                            <div style={doctorDashboardStyles.patientFullName}>
                              Dr. {appt.doctor?.name}
                            </div>
                            <div style={doctorDashboardStyles.patientEmail}>
                              {appt.doctor?.email}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div style={doctorDashboardStyles.detailItem}>
                      <div style={doctorDashboardStyles.detailLabel}>Date & Time</div>
                      <div style={doctorDashboardStyles.detailValue}>
                        {new Date(appt.time).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                    {appt.reason && (
                      <div style={doctorDashboardStyles.detailItem}>
                        <div style={doctorDashboardStyles.detailLabel}>Reason for Visit</div>
                        <div style={doctorDashboardStyles.detailValue}>{appt.reason}</div>
                      </div>
                    )}
                    <div style={doctorDashboardStyles.detailItem}>
                      <div style={doctorDashboardStyles.detailLabel}>Appointment ID</div>
                      <div style={doctorDashboardStyles.detailValue}>
                        <code style={doctorDashboardStyles.appointmentId}>
                          {appt._id.slice(-8).toUpperCase()}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default PreviousAppointments;
