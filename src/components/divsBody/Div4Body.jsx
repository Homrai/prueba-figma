import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from 'chart.js';


ChartJS.register(ArcElement, Tooltip,Legend);

const Div4Body = () => {
    const data = {
        labels: ['Ticket A', 'Ticket B', 'Ticket C', 'Ticket D'],
        datasets: [
          {
            label: 'D4',
            data: [12, 17, 17, 6],
            borderColor:'rgba(0, 0, 0)',
            //borderDash:[4,2,3,4],
            //borderDashOffset:0.5,
            borderWidth:0,
            //circumference:360,
            rotation:340,
            spacing:8,
            cutout:12,
            radius:28,
            backgroundColor: [
              'rgba(194, 41, 41)',
              'rgba(34, 44, 182)',
              'rgba(229, 223, 5)',
              'rgba(64, 178, 63)',
            ], 
            //hidden:true,        
          },
        ],
      };

      let data2 = data;
      data2.datasets.radius=30;

      let data3 = {
        labels: ['Ticket A', 'Ticket B', 'Ticket C', 'Ticket D'],
        datasets: [
          {
            label: 'D4',
            data: [12, 17, 17, 6],
            borderColor:'rgba(0, 0, 0)',
            //borderDash:[4,2,3,4],
            //borderDashOffset:0.5,
            borderWidth:0,
            //circumference:360,
            rotation:340,
            spacing:8,
            cutout:70,
            radius:100,
            backgroundColor: [
              'rgba(194, 41, 41)',
              'rgba(34, 44, 182)',
              'rgba(229, 223, 5)',
              'rgba(64, 178, 63)',
            ], 
            //hidden:true,        
          },
        ],
      };
      
      const options ={
        responsive:true,
        plugins:{
          legend:{
            position:"right",
            align:"end",
            labels:{
              boxWidth:10,
              boxHeight:10,
              color:"rgba(248, 248, 248)",
              textAlign:"left",
              font:{
                size:10
              }
            },
   
          }
        },      
      };
      const options2 ={
        responsive:true,
        plugins:{
          legend:{
            display:false,   
          }
        },      
      }

  return (
    <>
      <div className='div4 pie3'>
          <button className="week-button align-self-end">This week <i className="bi bi-caret-down-fill align-self-center i-week"></i></button>
          <Doughnut  className='pie' data={data} options={options}/>
      </div>
      <div className='div4 pie2'>
          <Doughnut className='pie' data={data2} options={options2}/>
      </div>
      <div className='div4 pie1'>
          <Doughnut className='pie-align' data={data3} options={options2}/>
      </div>
    </>
  )
}

export default Div4Body

