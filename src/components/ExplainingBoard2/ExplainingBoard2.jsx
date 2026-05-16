import "./ExplainingBoard2.css"

export const ExplainingBoard2 = ({ platformExplain1,platformExplain2 }) => {
  return (
    <div className="ExplainingBoard2">
        <h2 className="platformExplain1">
            {platformExplain1}
        </h2>
        <p className="platformExplain2">
            {platformExplain2}
        </p>
    </div>
  )
}
