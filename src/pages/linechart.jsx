import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineChartExample = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/time-info')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.message)) {
                    const formattedData = data.message.map((item) => {
                        return {
                            timestamp: item.timestamp, 
                            uv: 1, 
                        };
                    });
    
                    // Limit to first 100 entries
                    setData(formattedData.slice(0, 100));
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div style={{ width: '900px', height: '500px' }}>
            <h2 style={{ textAlign: 'center' }}>Line Graph of data</h2>
            <LineChart width={1100} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default LineChartExample;
