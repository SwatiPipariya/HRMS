import React from 'react'
import './Dashboard.css'
import Chart from "react-apexcharts"
import { BsArrowUpRight } from "react-icons/bs"
import { AreaChart,LineChart, Area, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Table from './Table/Table';
import ToDoList from './ToDoApp/ToDoList';
import Calendar from 'react-calendar';
import './Calender/Calender.css'
import Cards from './BulbCards/Cards' ;


function Dashboard() {

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 3000,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 3000
    }
  ];

  return (
    <div className='dash'>
      <div className='head-crd'>
        <Cards />
      </div>
      <div className='top-cards'>
        {/* ----------First Card-------- */}
        <div className='sing'>
          <p className='head-to'>Visits Today</p>
          <div className='vfvg'>
            <div className='cd-top'><p>764 </p> <BsArrowUpRight className='arr' />
            </div>
            <div className='cd-1'>
              <span><p>+830</p><p className='poiu'>Logins</p></span>
              <span><p>0.5%</p><p className='poiu'>SignOut</p></span>
              <span><p>4.5%</p><p className='poiu'>Rate</p></span>
            </div>
          </div>
        </div>
        {/* ------Second Card-------- */}
        <div className='sing '>
          <p className='head-to'>Revenue Breakdown</p>
          <div className='two'>
            <React.Fragment>
              <Chart
                type='donut'
                width={250}
                height={250}
                series={[45, 67, 89, 32, 52]}
                options={{
                  labels: ['USA', 'China', 'Russia','India', 'US'],
                  dataLabels: {
                    enabled: false
                  }
                }}
              />
            </React.Fragment>
          </div>

        </div>
        {/* ------------Third Card----------- */}
        <div className='sing'>
          <p className='head-to'>App Performance</p>
          {/* --Tooltip-- */}
          {/* <div className='tool'>
            <div className='fir_1'>
            <span className='cir_1'></span>
            <p>This Period</p>
            </div>
            <div className='fir_2'>
            <span className='cir_2'></span>
            <p>Last Period</p>
            </div>

          </div> */}
          {/* <p className='tool'>
          <small>
            <span className='cir_1'></span>
            <p>This Period</p>
          </small>
          <small>
            <span className='cir_2'></span>
            <p>Last Period</p>
            
          </small>
          </p> */}
          {/* --First Progress Bar-- */}
          <div className='head-three'>
            <div ><p className='crd-head'>SDK</p></div>
            <div className='prg'>
              <div className='prg_1' >
                <div className='prg_2'>

                </div>
              </div>
            </div>

            {/* --Second Progress Bar--*/}
            <div className='prg'>
              <div className='prg_1' >
                <div className='prgf'>

                </div>
              </div>
            </div>
            {/* --Third Progress Bar-- */}
            <div><p className='crd-head'>Integration</p></div>
            <div className='prg'>
              <div className='prg_1' >
                <div className='prg_2'>

                </div>
              </div>
            </div>
            {/* --Fourth Progress Bar-- */}
            <div className='prg'>
              <div className='prg_1' >
                <div className='prgf'>

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* ------------Fourth Card---------  */}
        <div className='sing'>
          <p className='head-to'>Server Overview</p>
          <div className='graph'>
            <p>60% / 3.3 Ghz</p>
            <LineChart width={100} height={50} data={data}>
              <Line dataKey="pv" stroke="orange" strokeWidth={2} dot={false} />
            </LineChart>
          </div>
          <div className='graph'>
            <p>30% / 6.3 Ghz</p>
            <LineChart width={100} height={50} data={data}>
              <Line dataKey="pv" stroke="blue" strokeWidth={2} dot={false} />
            </LineChart>
          </div>
          <div className='graph'>
            <p>68% / 2.3 Ghz</p>
            <LineChart width={100} height={50} data={data}>
              <Line dataKey="pv" stroke="aqua" strokeWidth={2} dot={false} />
            </LineChart>
          </div>
        </div>
      </div>
      {/* ---------Chart---------- */}
      <div className='line_chart'>
      <div style={{ width: '100%', height: '350px', padding: '10px' }}>
      <ResponsiveContainer>
        <AreaChart width={1080} height={600} data={data} style={{ }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name"  stroke="black" />
          <YAxis stroke="black" />
          <Tooltip />
          <Legend />
          {/* <Line
            type="monotone"
            dataKey="pv"
            stroke="red"
          // activeDot={{ r: 8 }}
          // activeDot={null}
          />
          <Line type="monotone" dataKey="uv" stroke="#4a70ed" /> */}
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#fe6f5e" fill="#fe6f5e" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#ffe135" fill="#ffe135" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#318ce7" fill="#318ce7" />
        </AreaChart>
         </ResponsiveContainer>
      </div>
      </div>
      {/* ---Table--- */}
      <Table />

      {/* ------Calender And To Do List------- */}
      <div className='Cal-do'>
        

        {/* ------Calender---- */}
        <div className='cal-main'>
          <Calendar />
        </div>

        {/* ------To Do List----- */}
        <div className='todo-main'>
          <ToDoList />
        </div>
      </div>
    </div>
  )
}


export default Dashboard