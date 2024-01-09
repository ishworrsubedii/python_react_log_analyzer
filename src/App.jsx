// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomSidebar from "./pages/global/sidebar";
import BargraphExample from "./pages/bargraph";
import PieChartExample from "./pages/piechart";
import LineChartExample from "./pages/linechart";
import GeoChartExample from "./pages/geo.jsx";
import Dashboard from "./pages/dashboard";
import HeatmapExample from "./pages/heatmap";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CustomSidebar />

        <div style={{ marginLeft: "200px", padding: "20px", width: "100%" }}>
          <Routes>
          <Route path="/" element={<Dashboard/>} />

            <Route path="/bar" element={<BargraphExample />} />
            <Route path="/pie" element={<PieChartExample />} />
            <Route path="/line" element={<LineChartExample />} />
            <Route path="/geography" element={<GeoChartExample />} />
            <Route path="/heatmap" element={<HeatmapExample />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
