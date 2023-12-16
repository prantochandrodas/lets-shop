import { Outlet } from "react-router-dom";
import HomeNavbar from "../Pages/Home/HomeNavbar/HomeNavbar";


const Layouts = () => {
    return (
        <div>
            <HomeNavbar/>
            <Outlet/>
        </div>
    );
};

export default Layouts;