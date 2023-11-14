
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const hourlyOwercast = (hourly, setOptions, setData) => {
   const options = {
  responsive: true,
  plugins: {
    legend: {
       display: false,
      position: 'left',
    },
    title: {
      display: true,
      text: 'Hourly forecast',
      position: 'top',
      align: 'start',
      padding: '15px'
    },
  },
    };
    const mounths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const labels = [];
    const dateNow = Date.now()
    const currentDate = new Date(dateNow)
    const hoursNow = currentDate.getHours()
    const time = hoursNow > 12 ? 'pm' : 'am';
    console.log(time);
    const next = new Date(dateNow + 86400000)
    const nextData = next.getDate()
    const nextMounth = next.getMonth()
    console.log(nextData);
    console.log(nextMounth);

    hourly.reduce((prevDate, item, ) => {
        // console.log(nextData)
        

        if (prevDate.hour > 10 && prevDate.hour < 24) {
            let set = prevDate.set
            if (prevDate.set === 'am') {
                set = 'pm'
            } else if (prevDate.set === 'pm') {
                set = nextData
                const hour = prevDate.hour - 11
            labels.push(`${nextData} ${mounths[nextMounth]}`)
            return { hour, set }
            }
            
            const hour = prevDate.hour - 12
            labels.push(`${hour} ${set}`)
            return { hour, set }
        } else {
            let set = prevDate.set
            let hour = prevDate.hour
            if (prevDate.set !== 'am' && prevDate.set !== 'pm'){
                set = 'am'
                hour = 0
            }
            hour = prevDate.hour + 1
            labels.push(`${hour} ${set}`)
            return { hour, set }
  }

  
}, {hour: hoursNow, set: 'am'});
 const data = {
  labels,
  datasets: [
    {
      data:  hourly.map((hour) => hour.temp),
      borderColor: '#FFB36C',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
  };
  
  setOptions(options);
  setData(data)
}
