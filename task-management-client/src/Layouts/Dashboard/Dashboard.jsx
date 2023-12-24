import { useState } from "react";
import SidePanel from "../../Components/Dashboard/SiderPanel/SidePanel";
import { Button } from "@material-tailwind/react";

const Dashboard = () => {
  
  return (
    <div className="relative">
      
      <div className="absolute top-1/2 left-0"></div>
      <div className={`md:grid md:grid-cols-4`}>
        <SidePanel />
        <div className="md:col-span-3">This is main panel</div>
      </div>
    </div>
  );
};

export default Dashboard;
