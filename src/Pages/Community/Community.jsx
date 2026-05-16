import { QuotationBlockHolder } from "../../components/QuotationBlockHolder/QuotationBlockHolder"
import Qlogo from "../../AllImages/logo/BG-Removed-logo(PseudoLab.com).png"
import "./Community.css"
import { Discussion } from "../../components/Discussion/Discussion"
import { CommunityAboutOf } from "../../components/CommunityAboutOf/CommunityAboutOf"
import { АccessionFromCommunity } from "../../components/АccessionFromCommunity/АccessionFromCommunity"
import joinLogo from "../../AllImages/logo/BG-Removed-logo(PseudoLab.com).png"
import { Link } from "react-router-dom"
import { PhilosophicalBlock } from "../../components/PhilosophicalBlock/PhilosophicalBlock"
import { MiniPhilosophicalBlock } from "../../components/MiniPhilosophicalBlcok/MiniPhilosophicalBlock"
import { MainBackBtns } from "../../components/MainBackBtns/MainBackBtns"

export const Community = () => {
  return (
    <div className="Community">
      <div className="community-quotation-wrapper">
        <QuotationBlockHolder 
          Quotation={`PseudoLab Community`} 
          QuotationImage={Qlogo} 
          QuotationDiscussion={`A place where people learn to think, discuss, and solve problems together. No toxicity, no show-offs, with a focus on understanding.`}
        />
      </div>
      
      <div className="community-discussion-wrapper">
        <Discussion/>
      </div>
      
      <div className="community-about-wrapper">
        <CommunityAboutOf 
          ComTitle={`Why is community important?`} 
          ComText={`Programming rarely works the first time. Questions, mistakes, and doubts are a normal part of the process.`} 
          ComQuestion={`The community is needed in order to:`} 
          comPoints={["go through the problems together", "look at solutions from different angles", "learn to explain and formulate thoughts"]}
        />
      </div>
      
      <div className="community-accession-wrapper">
        <АccessionFromCommunity 
          Join={`Join the community now to`} 
          JoinImg={joinLogo} 
          JoinL={`Pseudolab.com`}
        />
      </div>
      
      <div className="community-rules-heading-wrapper">
        <h2>and also read the 
          <div className="community-link-wrapper">
            <Link to="/communityrules" id="CRConf">
              pseudolab community rules
            </Link>
          </div>
        </h2>
      </div>
      
      <div className="community-philosophical-wrapper">
        <PhilosophicalBlock 
          PhilosophicalBlockinf={`The best way to understand an algorithm is to try to explain it to someone else.`}
        />
      </div>
      
      <div className="community-mini-philosophical-wrapper">
        <MiniPhilosophicalBlock 
          MiniPB={`It doesn't matter what level you're at. What matters is that you want to understand.`}
        />
      </div>
      
      <div className="community-buttons-wrapper">
        <MainBackBtns 
          MainText1={`Pseudolab.com`} 
          MainText2={`become part of the community✨`}
        />
      </div>
    </div>
  )
}
