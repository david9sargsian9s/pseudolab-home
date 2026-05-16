import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./LearnWork.css";
import { ArrowBarRightSVG } from "../../SVG/ArrowBarRightSVG";
import { ArrowBarLeftSVG } from "../../SVG/ArrowBarLeftSVG";

export const LearnWork = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const slides = [
    "Whatispseudocode",
    "Howtowritepseudocode"
  ];

  const currentPath = location.pathname.split("/").pop();
  const currentIndex = slides.indexOf(currentPath);

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      navigate(slides[currentIndex + 1]);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(slides[currentIndex - 1]);
    }
  };

  return (
    <div className="LearnWork">
      <h1>
        Welcome to the pseudocode mini course, where you'll learn how to write your own pseudocode correctly!
      </h1>
      <div className="flexConfig">
        <h2>More information coming soon!</h2>
      </div>
      <div className="mainLearnConfigs">
        <div className="linktolearnconfigs">

          <button 
            onClick={goBack}
            disabled={currentIndex === 0}
          >
            <ArrowBarLeftSVG />
          </button>

          <button 
            onClick={goNext}
            disabled={currentIndex === slides.length - 1}
          >
            <ArrowBarRightSVG />
          </button>

        </div>

        <div className="OutletConfigs">
          <Outlet />
        </div>
      </div>
    </div>
  );
};