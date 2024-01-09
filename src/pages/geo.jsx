import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const GeoChartExample = () => {
  const [data, setData] = useState([['Country', 'Value']]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/country-info')
      .then(response => response.json())
      .then(data => {
        const formattedData = Object.entries(data.message).map(([country, value]) => [country, value]);
        setData(prevData => [...prevData, ...formattedData]);
      });
  }, []);

  return (
    <div style={{ width: '900px' }}>
      <h2 style={{textAlign:'center'}}>Geo Chart</h2>
      <br />
      <Chart
        width={'1000px'}
        height={'500px'}
        chartType="GeoChart"
        data={data}
        options={{
          colorAxis: { colors: ['white', 'black', '#e31b23'] },
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );

};

export default GeoChartExample;