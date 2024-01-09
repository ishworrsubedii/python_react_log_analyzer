import { textAlign } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

async function fetchData() {
  const response = await fetch('http://127.0.0.1:8000/browser-info', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.message;
}

function PiechartExample() {
  const [rawData, setRawData] = useState({});

  useEffect(() => {
    fetchData().then(data => {
      setRawData(data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }, []);

  const data = Object.entries(rawData).map(([name, value]) => ({ name, value }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div style={{ width: '500px', height: '500px' ,alignContent:'center'}}>
            <h2 style={{textAlign:'center'}}>PieChart Visualization of Browser Info</h2> 

      <ResponsiveContainer>

        
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PiechartExample;