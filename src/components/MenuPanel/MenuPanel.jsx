
import { useState } from "react"
import "./MenuPanel.css"
import { ListULSVG } from "../../SVG/ListULSVG";
import { Link } from "react-router-dom";

export const MenuPanel = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="MenuPanel">
      <button onClick={() => setIsOpened(true)} id="ToAdaptiveBtn">
        <ListULSVG />
      </button>

      {isOpened && (
        <div className="auth-overlay" onClick={() => setIsOpened(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <Link to="/" className="PortalLinks">Home</Link>
                <Link to="/about" className="PortalLinks">About</Link>
                <Link to="/community" className="PortalLinks">Community</Link>
                <Link to="/LearnWork" className="PortalLinks">Learn</Link>
          </div>
        </div>
      )}
    </div>
  );
};

