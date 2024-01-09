import React, { useEffect, useState } from 'react';
import HeatMap from 'react-heatmap-grid';

const HeatmapExample = () => {
    const [data, setData] = useState([]);
    const [xLabels, setXLabels] = useState([]);
    const [yLabels, setYLabels] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/time-info')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.message)) {
                    const counts = new Map();

                    data.message.forEach(item => {
                        const date = item.date;

                        if (!counts.has(date)) {
                            counts.set(date, new Array(24).fill(0)); // Assuming time is in hours
                        }

                        const time = parseInt(item.time.split(':')[0]); // Assuming time is in "HH:MM:SS" format
                        counts.get(date)[time]++;
                    });

                    const heatmapData = Array.from(counts.values()).slice(0, 10); // Limit to first 10 data points

                    setData(heatmapData);
                    setXLabels(Array.from(counts.keys()).slice(0, 10)); // Limit to first 10 labels
                    setYLabels(new Array(24).fill(0).map((_, i) => i.toString())); // "0" to "23"
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Heatmap of data</h2>
            <HeatMap
                xLabels={xLabels}
                yLabels={yLabels}
                data={data}
            />
        </div>
    );
};

export default HeatmapExample;
