import React from 'react';
import PiechartExample from './pages/piechart';
import BargrphExample from './pages/bargraph';
// import GeographyExample from './pages/geograph';

// import UsersByTimeOfDayDashboard from './pages/timedashboard';


function App() {
  return (
    <div>
      <p style={{display:'flex',justifyContent:'center', textAlign: 'center', fontSize: 30, paddingBottom: 40 }}>Individual Assignment of Distributed and Parallel Computing</p>

      <div style={{ display: 'flex', width: '100%', maxWidth: '1200px', margin: '0 auto',alignContent:'center', justifyContent:'left'}}>
        <div style={{ flex: 1 }}>
          <PiechartExample />
        </div>
        <div style={{ flex: 1 }}>
          <BargrphExample />
        </div>
        <div>
            {/* <GeographyExample/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
