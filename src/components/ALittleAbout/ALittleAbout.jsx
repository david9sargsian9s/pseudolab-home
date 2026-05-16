import "./ALittleAbout.css"

export const ALittleAbout = ({ mainaboutP, finalP }) => {
  return (
    <div className="ALittleAbout">
        <h2>{mainaboutP}</h2>
        <div className="finalaboutP">
            <h3>{finalP}</h3>
        </div>
    </div>
  )
}
