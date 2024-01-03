import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

function BargrphExample() {
    const data = [
        { data: [3], stack: 'A', label: 'Series A1' },
        { data: [8], stack: 'A', label: 'Series A2' },
        { data: [4], stack: 'B', label: 'Series B1' },
        { data: [8], stack: 'B', label: 'Series B2' },
    ];

    const textColor = 'white';

    return (
        <div style={{ width: 800, height: 600 }}>
            <p style={{ textAlign: 'center', marginBottom:100 }}>Pie Chart</p>

            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="label" stroke={textColor} />
                    <YAxis stroke={textColor} />
                    <Legend wrapperStyle={{ color: textColor }} />
                    <Tooltip cursor={{ fill: textColor }} />
                    {data.map((entry, index) => (
                        <Bar
                            key={index}
                            dataKey={`data[${index}]`}
                            stackId={entry.stack}
                            fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BargrphExample;
