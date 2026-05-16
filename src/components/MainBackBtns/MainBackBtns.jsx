import "./MainBackBtns.css"
import { UserPlusSVG } from "../../SVG/UserPlusSVG"
import MainLogo from "../../AllImages/logo/BG-Removed-logo(PseudoLab.com).png"
import { Link } from "react-router-dom"

export const MainBackBtns = ( { MainText1,MainText2 } ) => {
  return (
    <div className="generalGreeting sectionConf1">
        <div className="greetings">
            <h1>{MainText1}</h1>
            <img src={MainLogo} id="MainLogoMom" alt="Pseudolab.com" />
            <h1>{MainText2}</h1>
        </div>
        <div className="btns-holder">
            <Link to="/learnwork" id="LearnToBtn">
                Learn Work
            </Link>
            <Link to="/register" id="RegHomeBtn">
                Register
                <UserPlusSVG/>
            </Link>
        </div>
    </div>
  )
}
