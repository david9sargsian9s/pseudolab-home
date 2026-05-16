import "./ALittleAbout2.css"

export const ALittleAbout2 = ({ mainaboutP, finalP }) => {
  return (
    <div className="ALittleAbout2">
        <h2>{mainaboutP}</h2>
        <div className="finalaboutP">
            <h3>{finalP}</h3>
        </div>
    </div>
  )
}
