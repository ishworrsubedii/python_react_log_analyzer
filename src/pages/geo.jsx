import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const GeoChartExample = () => {
  const [dataObject, setDataObject] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://127.0.0.1:8000/ip-counts', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDataObject(data);
    }

    fetchData();
  }, []);

  const dataArray = [['Country', 'Value']];
  for (const [country, value] of Object.entries(dataObject)) {
    dataArray.push([country, value]);
  }

  return (
    
    
    <div style={{ width: '900px' }}
    
    >
                    <h2 style={{textAlign:'center'}}>Geograph Visualization of IP  </h2> 
                  

    
      <Chart
        width={'00px'}
        height={'400px'}
        chartType="GeoChart"
        data={dataArray}
        options={{
          colorAxis: { colors: ['green', 'yellow'] },
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};

export default GeoChartExample;