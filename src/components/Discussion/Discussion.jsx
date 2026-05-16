import { ArrowRightSVG } from "../../SVG/ArrowRightSVG"
import { ExclamationPresonSVG } from "../../SVG/ExclamationPresonSVG"
import { PeopleFillSVG } from "../../SVG/PeopleFillSVG"
import { PresonCheckFill } from "../../SVG/PresonCheckFill"
import "./Discussion.css"

export const Discussion = () => {
  return (
    <div className="Discussion">
        <ExclamationPresonSVG/>
        <ArrowRightSVG/>
        <PeopleFillSVG/>
        <ArrowRightSVG/>
        <PresonCheckFill/>
    </div>
  )
}
