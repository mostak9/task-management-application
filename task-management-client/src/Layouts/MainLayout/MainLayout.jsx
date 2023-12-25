import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Shared/Navigation/Navigation";
import Footer from "../../Components/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;