// import React, { useEffect, useRef } from 'react';
// import {Chartjs} from 'chart.js';

// const chartConfig = {
//   type: 'bar',
//   data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//   options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
// };

// export const Chart = () => {
//   const chartContainer = useRef(null);
//   const [chartInstance, setChartInstance] = useState(null);

//   useEffect(() => {
//     if (chartContainer && chartContainer.current) {
//       const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
//       setChartInstance(newChartInstance);
//     }
//   }, [chartContainer]);

//   return (
//     <div>
//       <canvas ref={chartContainer} />
//     </div>
//   );
// };