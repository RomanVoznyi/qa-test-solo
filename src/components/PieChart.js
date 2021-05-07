import { Pie } from 'react-chartjs-2';

const correct = 2;
const incorrect = 10;
const total = correct + incorrect;
const correctLabel = `${Math.round((correct / total) * 100)}% Correct`;
const incorrectLabel = `${Math.round((incorrect / total) * 100)}% Incorrect`;

const data = {
  labels: [correctLabel, incorrectLabel],
  datasets: [
    {
      data: [correct, incorrect],
      backgroundColor: ['#ff6b09', '#D7D7D7'],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 25,
        boxHeight: 25,
        padding: 35,
        font: {
          family: "'Montserrat', sans-serif",
          size: 16,
          weight: 'bold',
          lineHeight: 1.25,
          color: '#000000',
        },
      },
    },
    tooltip: false,
  },
  responsive: true,
  maintainAspectRatio: false,
};

const PieChart = () => (
  <>
    <Pie data={data} options={options} />
  </>
);

export default PieChart;
