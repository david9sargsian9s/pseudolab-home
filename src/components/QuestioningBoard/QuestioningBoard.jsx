import "./QuestioningBoard.css"

export const QuestioningBoard = ({
  WhoIsThisFor,
  WhoInfo = [],
  WhoInfoExplain = [],
  imageMarks
}) => {
  return (
    <div className="QuestioningBoard">
      <div className="WTFQimg">
        <h2>{WhoIsThisFor}</h2>
        <img src={imageMarks} alt="?" width={100} />
      </div>

      <ul>
        {WhoInfo.map((item, i) => {
          return (
            <li key={i} className="infoBox1">
              {item}

              {WhoInfoExplain.map((itemExplain, j) => {
                return (
                  <span key={j}>{itemExplain}</span>
                )
              })}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
