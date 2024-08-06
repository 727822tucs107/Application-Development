import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>1500</p>
        </div>
        <div className="stat-card">
          <h3>Active Listings</h3>
          <p>500</p>
        </div>
        <div className="stat-card">
          <h3>Pending Approvals</h3>
          <p>30</p>
        </div>
      </div>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default Dashboard;