import React, { useState, useEffect } from 'react';
// Import other components as needed (e.g., charts, lists)
// import './dashboard.css';

function Dashboard() {
  const [appointmentStats, setAppointmentStats] = useState(null);
  const [patientList, setPatientList] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

//   useEffect(() => {
//     // Fetch appointment statistics, patient list, and recent activity from API
//     const fetchData = async () => {
//       const response = await fetch('/api/dashboard');
//       const data = await response.json();
//       setAppointmentStats(data.appointmentStats);
//       setPatientList(data.patientList);
//       setRecentActivity(data.recentActivity);
//     };
//     fetchData();
//   }, []);

  return (
    <div className="dashboard">
      <header>
        <h2>Dashboard</h2>
      </header>
      <main>
        <section className="stats">
          <h3>Appointment Statistics</h3>
          {/* Render appointment statistics (e.g., charts, numbers) */}
          {appointmentStats ? (
            <div>
              <p>Total Appointments: {appointmentStats.total}</p>
              {/* Display other stats based on appointmentStats data */}
            </div>
          ) : (
            <p>Loading stats...</p>
          )}
        </section>
        <section className="patients">
          <h3>Patient List</h3>
          <ul>
            {patientList.map((patient) => (
              <li key={patient.id}>
                {patient.name} - {patient.email}
              </li>
            ))}
          </ul>
        </section>
        <section className="activity">
          <h3>Recent Activity</h3>
          {/* Render recent activity list (e.g., events, logs) */}
          {recentActivity.map((activity) => (
            <p key={activity.id}>
              {activity.timestamp} - {activity.message}
            </p>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
