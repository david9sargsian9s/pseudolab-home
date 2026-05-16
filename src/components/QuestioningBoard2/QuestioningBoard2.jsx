import "./QuestioningBoard2.css"

export const QuestioningBoard2 = ({
  WhoIsThisFor,
  WhoInfo = [],
}) => {
  return (
    <div className="QuestioningBoard2">
      <div className="WTFQimg2">
        <h2>{WhoIsThisFor}</h2>
      </div>

      <ul>
        {WhoInfo.map((item, i) => {
          return (
            <li key={i} className="infoBox2">
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
