import React from 'react';
import BargraphExample from "./bargraph";
import PieChartExample from "./piechart";
import LineChartExample from "./linechart";
import GeoChartExample from "./geo";

const Dashboard = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <div style={{ height: '400px' }}>
                <BargraphExample/>
            </div>
            <div style={{ height: '400px' }}>
                <PieChartExample/>
            </div>
            <div style={{ height: '400px' }}>
                <LineChartExample/>
            </div>
            <div style={{ height: '400px' }}>
                <GeoChartExample/>
            </div>
        </div>
    );
};

export default Dashboard;