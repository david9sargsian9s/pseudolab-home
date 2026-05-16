import "./AppoarchBoard3.css"

export const AppoarchBoard3 = ({
  Appoarchs = [],
  AppoarchsInfo = []
}) => {
  return (
    <div className="AppoarchBoard3">
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
