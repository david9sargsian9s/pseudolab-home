import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import Demo from "../../components/Demo/Demo";

export function Layout() {
    return (
        <div className="Layout">
            <Navigation/>
            <Demo/>
            <Outlet/>
            <Footer/>
        </div>
    )
}