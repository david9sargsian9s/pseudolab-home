import "./CommunityRuleBlock.css"

export const CommunityRuleBlock = ({ rule, ComRuleText }) => {
  return (
    <div className="CommunityRuleBlock">
        <h2>{rule}</h2>
        <div className="textholding">
            <p>{ComRuleText}</p>
        </div>
    </div>
  )
}
