import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";

export function Layout() {
    return (
        <div className="Layout">
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    )
}