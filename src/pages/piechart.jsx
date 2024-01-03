import React from 'react';
import { PieChart as MuiPieChart, Pie, ResponsiveContainer } from 'recharts';

function PiechartExample() {
  const data = [
    { name: 'Label 1', value: 30 },
    { name: 'Label 2', value: 50 },
    { name: 'Label 3', value: 20 },
  ];

  return (
    <>
      <div style={{ width: 800, height: 600 }}>
      <p style={{ textAlign: 'center', marginBottom:100 }}>Pief Chart</p>
        <ResponsiveContainer>
          <MuiPieChart>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={300}
              fill="#8884d8"
              label
            />
          </MuiPieChart>
        </ResponsiveContainer>
        
      </div>
    </>
  );
}



export default PiechartExample;
