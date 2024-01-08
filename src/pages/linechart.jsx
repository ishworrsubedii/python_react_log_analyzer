import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: '12:00:00', uv: 2000000 },
    { name: '13:00:00', uv: 3000000 },
    { name: '14:00:00', uv: 2500000 },
    { name: '15:00:00', uv: 3500000 },
];

const LineChartExample = () => (
    <div style={{ width: '900px', height: '500px' }}>
        <h2>Line Graph of dummy data </h2>
        <LineChart width={1100} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </div>
);

export default LineChartExample;