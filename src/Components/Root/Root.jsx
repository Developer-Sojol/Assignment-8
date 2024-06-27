import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer'
import Header from "../Header/Header";




const Root = () => {
    return (
        <div className="max-w-[1320px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;