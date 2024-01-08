import React from 'react';
import Divider from '@mui/material-next/Divider';

import BargraphExample from "./bargraph";
import PieChartExample from "./piechart";
import LineChartExample from "./linechart";
import GeoChartExample from "./geo";

const Dashboard = () => {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div style={{ position: 'absolute', top: '20px', bottom: '1000px', left: '50px', right: '0', margin: 'auto', maxWidth: '50%', height: '150px' }}>
                <BargraphExample />
            </div>
            <Divider style={{ borderTop: '1px dashed #fffff' }} orientation="horizontal" variant="inset" />
            <div style={{ position: 'relative', height: '100vh' }}>
                <div style={{ position: 'absolute', top: '200px', bottom: '0', left: '100px', right: '0', margin: 'auto', maxWidth: '50%', height: '100px' }}>
                    <PieChartExample />
                </div>
                <div style={{ position: 'absolute', top: '200px', bottom: '0', left: '900px', right: '0', margin: 'auto', maxWidth: '50%', height: '100px' }}>
                    <GeoChartExample />
                </div>
                <div style={{ position: 'absolute', top: '1300px', bottom: '0', left: '350px', right: '0', margin: 'auto', maxWidth: '1000px', height: '200px' }}>      
                    <LineChartExample />        
                    </div>

            </div>
            
        </div>
    );


};

export default Dashboard;