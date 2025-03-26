import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import Sidebar from '../Components/Sidebar';

// Register Chart.js components
Chart.register(...registerables);

function Reports() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('goodCanvas1').getContext('2d');
    
    // Destroy existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart instance
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Tasks Completed',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Task Completion',
            font: {
              size: 18
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Tasks'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          }
        }
      }
    });

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="container-fluid mt-5 px-4">
      <div className="row pt-5">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-9 shadow rounded rounded-4 p-4 mt-5">
          <div className="chart-container" style={{ position: 'relative', height: '400px' }}>
            <canvas 
              id="goodCanvas1" 
              aria-label="Monthly Task Completion Chart" 
              role="img"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;