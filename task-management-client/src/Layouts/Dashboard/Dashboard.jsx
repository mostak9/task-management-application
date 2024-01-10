
import SidePanel from "../../Components/Dashboard/SiderPanel/SidePanel";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div className="relative">
      
      <div className="absolute top-1/2 left-0"></div>
      <div className={` lg:grid lg:grid-cols-4`}>
        <SidePanel />
        <div className="lg:col-span-3">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
