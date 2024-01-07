import { textAlign } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

async function fetchData() {
    const response = await fetch('http://127.0.0.1:8000/os-info', {
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

function BargraphExample() {
    const [rawData, setRawData] = useState({});

    useEffect(() => {
        fetchData().then(data => {
            setRawData(data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }, []);

    const data = Object.entries(rawData).map(([label, value], index) => ({
        name: label.split(';')[0],
        value,
    }));

    return (
        <div style={{ width: '100vh', height: 800 }}>
            <h2 style={{textAlign:'center'}}>BarGraph Visualization of Operating System Info</h2>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BargraphExample;