import "./AppoarchBoard1.css"

export const AppoarchBoard1 = ({
  Appoarchs = [],
  AppoarchsInfo = []
}) => {
  return (
    <div className="AppoarchBoard1">
      {Appoarchs.map((item, i) => (
        <div className="AppoarchsList" key={i}>
          <ul>
            <li>{item}</li>
          </ul>

          {AppoarchsInfo.map((info, j) => (
            <span key={j}>{info}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
