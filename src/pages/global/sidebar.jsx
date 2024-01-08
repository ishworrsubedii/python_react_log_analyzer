import React, { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link to={to}>
      <MenuItem
        active={selected === title}
        style={{
          backgroundColor: "#606060",
          color: "#fff",
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography color="#fff">{title}</Typography>
      </MenuItem>
    </Link>
  );
};
const CustomSidebar = () => {
  const [selected, setSelected] = useState("");

  return (
    <ProSidebar
      style={{
        position: 'fixed',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        width: "px",
        height: "326px",
        background: "#606060",
      }}
    >
      <Menu iconShape="square">
        <Box sx={{ background: "#606060", color: "#fff", padding: 2 }}>
          <SidebarItem
            title="Dashboard"
            backgroundColor="#fff"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography sx={{ m: "15px 0 5px 20px" }}>Charts</Typography>
          <SidebarItem
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarItem
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarItem
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarItem
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </ProSidebar>
  );
};

export default CustomSidebar;