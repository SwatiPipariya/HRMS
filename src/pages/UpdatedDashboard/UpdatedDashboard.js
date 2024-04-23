import React, { useEffect, useState, useRef } from 'react'
import "./UpdatedDashboard.css"
import ApexCharts from 'apexcharts';
import FrTable from "./FrTable/FrTable"

function UpdatedDashboard() {

  const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected option

  // Function to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOpt, setSelectedOpt] = useState(""); // State to hold the selected option

  // Function to handle option selection
  const handleChange = (event) => {
    setSelectedOpt(event.target.value);
  };


  // **************First CircularChart***********
  useEffect(() => {
    const options = {
      series: [80],
      chart: {
        height: 240,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          }
        },
      },
      labels: ['Cricket'],
    };


    const chart = new ApexCharts(document.querySelector("#fchart"), options);
    chart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);


  // *****************Second Circular Chart**************
  useEffect(() => {
    const options = {
      series: [30],
      chart: {
        height: 240,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          }
        },
      },
      labels: ['Football'],
      colors: ['#FF5733'],
    };


    const chart = new ApexCharts(document.querySelector("#sechart"), options);
    chart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  // *****************Third Circular Chart**************
  useEffect(() => {
    const options = {
      series: [90],
      chart: {
        height: 240,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          }
        },
      },
      labels: ['Hockey'],
      colors: ['#228b22'],
    };


    const chart = new ApexCharts(document.querySelector("#thchart"), options);
    chart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  // *****************Fourth circular Chart**************
  useEffect(() => {
    const options = {
      series: [20],
      chart: {
        height: 240,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          }
        },
      },
      labels: ['VolleyBall'],
      colors: ['#c71585'],

    };


    const chart = new ApexCharts(document.querySelector("#fochart"), options);
    chart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  
  //  ----------------------Realtime line chart--------------
  const chartRef = useRef(null);

  useEffect(() => {
    const generateData = (count, yrange) => {
      const data = [];
      let baseval = new Date('11 Feb 2019').getTime();
      let i = 0;
      while (i < count) {
        const x = baseval + i * 86400000;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        data.push({ x, y });
        i++;
      }
      return data;
    };

    const options = {
      series: [{
        data: generateData(30, {
          min: 10,
          max: 90
        })
      }],
      chart: {
        id: 'realtime',
        height: 350,
        type: 'line',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Dynamic Updating Chart',
        align: 'left'
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function (value) {
            const date = new Date(value);
            return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
          }
        }
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    const updateData = () => {
      chart.updateSeries([{
        data: generateData(30, {
          min: 10,
          max: 90
        })
      }]);
    };

    const interval = setInterval(updateData, 10000);

    return () => clearInterval(interval);
  }, []);




  // --------------------------Pie chart-----------------
  useEffect(() => {
    const options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chart = new ApexCharts(document.querySelector("#pichart"), options);
    chart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);


  // ---------------------Area chart----------------------------
  useEffect(() => {
    const options = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        // width: 500,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#arechart"), options);
    chart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);



  return (
    <div className='manas'>
      {/* -------------Drop Down---------------- */}
      <div className='drp'>
        <div className='fdrp'>
          <h4>Select an option:</h4>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
        <div className='secdrp'>
        <h4>Select an option:</h4>
          <select value={selectedOpt} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {selectedOpt && <p>You selected: {selectedOpt}</p>}
        </div>
      </div>

      {/* -----------------Top Section------------ */}
      <div className='rw-1'>
        <div className='crda-tp'>
          <div id='fchart'>

          </div>
        </div>
        <div className='crda-tp'>
          <div id='sechart'>

          </div>
        </div>
        <div className='crda-tp'>
          <div id='thchart'>

          </div>
        </div>
        <div className='crda-tp'>
          <div id='fochart'>

          </div>
        </div>

      </div>

      {/* -------------------- Chart Section--------------- */}
      <div className='bbch'>
      <div id="chart" ref={chartRef}></div>
      </div>


      {/* --------------Pie Chart & Area Chart---------- */}
      <div className='zsdr'>
        <div className='kmcep'>
          <div id="pichart">

          </div>
        </div>
        <div className='qmvs'>
          <div id='arechart'>

          </div>
        </div>
      </div>

      {/* ----------------Table----------------------------- */}
       <div className='mklsqo'>
           <FrTable />
      </div> 

    </div>
  )
}

export default UpdatedDashboard


// import React, { useEffect, useRef } from 'react';
// import ApexCharts from 'apexcharts';

// const ChartComponent = () => {
  
//   return ;
// };

// export default ChartComponent;
