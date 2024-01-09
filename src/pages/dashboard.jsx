// Dashboard.jsx
import React from 'react';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BargraphExample from "./bargraph";
import PieChartExample from "./piechart";
import LineChartExample from "./linechart";
import GeoChartExample from "./geo";
import HeatmapExample from './heatmap';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Card className="card line-chart-card" style={{ backgroundColor: '#282c34' }}>
            <CardContent style={{ color: 'white' }}>
                    <BargraphExample />
                </CardContent>
            </Card>
            <Divider className="divider" orientation="horizontal" variant="inset" />
            <Card className="card geo-chart-card" style={{ backgroundColor: '#282c34' }}>
                <CardContent style={{ color: 'white' }}>
                    <GeoChartExample />
                </CardContent>
            </Card>
            <Divider className="divider" orientation="horizontal" variant="inset" />
            <Card className="card pie-chart-card" style={{ backgroundColor: '#282c34' }}>
                <CardContent style={{ color: 'white' }}>
                    <PieChartExample />
                </CardContent>
            </Card>
            <Divider className="divider" orientation="horizontal" variant="inset" />
            <Card className="card bar-graph-card" style={{ backgroundColor: '#282c34' }}>
                
                <CardContent style={{ color: 'white' }}>
                    <LineChartExample />
                </CardContent>
            </Card>

        </div>
    );
};

export default Dashboard;