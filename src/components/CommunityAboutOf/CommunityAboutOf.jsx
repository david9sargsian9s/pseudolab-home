import "./CommunityAboutOf.css"

export const CommunityAboutOf = ({ ComTitle, ComText, ComQuestion, comPoints = [] }) => {
  return (
    <div className="CommunityAboutOf">
        <h2>{ComTitle}</h2>
        <div className="comConf">
            <p>{ComText}</p>
            <h2>{ComQuestion}</h2>
            <ul>
                {comPoints.map((comItem) => {
                    return (
                        <li>{comItem}</li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
