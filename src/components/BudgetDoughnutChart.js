import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetDoughnutChart({ items }) {
  const labels = items.map((i) => i.title);
  const values = items.map((i) => i.budget);
  const colors = items.map((i) => i.color || '#4d5791');

  const data = {
    labels,
    datasets: [
      {
        label: 'Budget',
        data: values,
        backgroundColor: colors,
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 15,
          padding: 15,
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <div style={{ width: '100%', height: 500, maxWidth: '600px', margin: '0 auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default BudgetDoughnutChart;


