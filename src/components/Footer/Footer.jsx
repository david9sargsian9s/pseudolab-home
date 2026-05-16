import { NavLink } from "react-router-dom"
import { GitHubSVG } from "../../SVG/GitHubSVG"
import { PrivacySVG } from "../../SVG/PrivacySVG"

export function Footer() {
    return (
        <div className="footerConfiguratuions">
                <footer>
                    <div className="container">
                        <div className="footerItems">
                            <p>© 2025 PseudoLab — Practice. Logic. Code.</p>
                            <p>All rights reserved</p>
                            <div className="PrivacyPolicyQ">
                                <NavLink to="/privacyPolicy" className="footerLinks">
                                    <PrivacySVG/>
                                    Privacy Policy
                                </NavLink>
                                |
                                <NavLink to="/policy" className="footerLinks">
                                    Terms
                                </NavLink>
                            </div>
                            <div className="otherLinks">
                                <a href="https://icons.getbootstrap.com/icons/github/" className="footerLinks">
                                    <GitHubSVG/>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    )
}