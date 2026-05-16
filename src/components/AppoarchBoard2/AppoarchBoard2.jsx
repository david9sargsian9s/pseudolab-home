export const AppoarchBoard2 = ({
  Appoarchs = [],
  AppoarchsInfo = []
}) => {
  return (
    <div className="AppoarchBoard2">
      {Appoarchs.map((item, i) => (
        <div className="AppoarchsList2" key={i}>
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
