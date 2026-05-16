import { useState } from "react"
import { useEffect } from "react";
import { DarkThemeSVG } from "../../SVG/DarkThemeSVG";
import { LightThemeSVG } from "../../SVG/LightThemeSVG";
import NavLogo from "../../AllImages/logo/BG-Removed-logo(PseudoLab.com).png"
import { TelegramSVG } from "../../SVG/TelegramSVG";
import { DiscordSVG } from "../../SVG/DiscordSVG";
import { NavLink } from "react-router-dom";
import { MenuPanel } from "../MenuPanel/MenuPanel";
import { Autorization } from "../Autorization/Autorization";

export function Navigation() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav>
            <NavLink to="/" className="logo-holder">
                <img src={NavLogo} id="mainLogo" alt="pseudolab.home" width="70px"/>
                PseudoLab.home
            </NavLink>
            <div className="commLinks">
                <a href="https://web.telegram.org/a/" className="Links" title="Telegram">
                    <TelegramSVG/>
                </a>
                <a href="https://discord.com/" className="Links" title="Diskord">
                    <DiscordSVG/>
                </a>
            </div>
            <div className="portals">
                <NavLink to="/" className="PortalLinks">Home</NavLink>
                <NavLink to="/about" className="PortalLinks">About</NavLink>
                <NavLink to="/community" className="PortalLinks">Community</NavLink>
                <NavLink to="/LearnWork" className="PortalLinks">Learn</NavLink>
            </div>
            <div className="themeqbars">
                <Autorization/>
                <MenuPanel/>
                <button className="themeBtn" onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <DarkThemeSVG/> : <LightThemeSVG/>}
                </button>
            </div>
        </nav>
    )
}