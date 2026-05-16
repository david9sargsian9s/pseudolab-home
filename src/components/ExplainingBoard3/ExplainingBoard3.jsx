import "./ExplainingBoard3.css"

export const ExplainingBoard3 = ({ Exp3,question }) => {
  return (
    <div className="ExplainingBoard3">
        <h2>{question}</h2>
        <h3>
            {Exp3}
        </h3>
    </div>
  )
}
