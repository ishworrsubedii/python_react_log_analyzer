import React from 'react';
import { Geography } from "react-simple-maps"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UsersByTimeOfDayDashboard = () => {
  // Sample data representing user activity throughout the day
  const data = [
    { id: 1, hour: '1', users: 10 },
    { id: 2, hour: '2', users: 15 },
    // ... rest of your data ...
  ];

  const columns = [
    { field: 'hour', headerName: 'Hour', flex: 1 },
    { field: 'users', headerName: 'Users', flex: 1 },
  ];

  return (
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGrid rows={data} columns={columns} pageSize={5} />
    //   <ResponsiveContainer width="100%" height={300}>
    //     <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <XAxis dataKey="hour" />
    //       <YAxis />
    //       <Tooltip />
    //       <Legend />
    //       <Line type="monotone" dataKey="users" stroke="#8884d8" />
    //     </LineChart>
    //   </ResponsiveContainer>
    // </div>
    <Geography>hello</Geography>
  );
};

export default UsersByTimeOfDayDashboard;
