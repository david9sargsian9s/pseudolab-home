import { CommunityRuleBlock } from "../../components/CommunityRuleBlock/CommunityRuleBlock"
import { QuestioningBoard } from "../../components/QuestioningBoard/QuestioningBoard"
import questionMark from "../../AllImages/logo/BG-Removed-Logo2.png"
import LogoMark from "../../AllImages/logo/BG-Removed-logo(PseudoLab.com).png"
import "./CommunityRules.css"

export const CommunityRules = () => {
  return (
    <div className="CommunityRules">
        <h1>📜 Community Rules</h1>
        <CommunityRuleBlock rule={`1. General principles`} ComRuleText={`This community is designed for learning, discussing, and developing algorithmic thinking. Respectful communication, clarity of thought, and a desire for understanding are valued here, not displays of superiority. Participation in the community constitutes agreement with these rules.`}/>
        <QuestioningBoard WhoIsThisFor={`2. Respect and tone of communication`} imageMarks={questionMark} WhoInfo={["Treat all participants with respect, regardless of their level of knowledge.", "Insults, ridicule, toxic behavior, and passive aggression are prohibited.", "Constructive criticism is only acceptable on the merits and without resorting to personal attacks."]}/>
        <QuestioningBoard WhoIsThisFor={`3. Questions and Answers`} imageMarks={questionMark} WhoInfo={["Questions of any level of difficulty are acceptable.", "There are no 'stupid' questions", "If you answer, try to explain the logic, and not just give a ready-made solution.", "Use pseudocode for explanations whenever possible."]}/>
        <QuestioningBoard WhoIsThisFor={`4. Publication of decisions`} imageMarks={questionMark} WhoInfo={["When publishing a solution, it is advisable to describe your train of thought.", "Copying code without explanation is not encouraged.", "Plagiarism and presenting other people's solutions as your own are prohibited."]}/>
        <QuestioningBoard WhoIsThisFor={`5. Content format`} imageMarks={questionMark} WhoInfo={["Allowed:", "Forbidden:"]} WhoInfoExplain={["Discussion of algorithms and decision logic pseudocode examples Analysis of errors and alternative approaches", "Spam and advertising Off-topic content not related to programming or education Links to malicious or illegal content"]}/>
        <QuestioningBoard WhoIsThisFor={`6. Behavior in discussions`} imageMarks={LogoMark} WhoInfo={["Keep the discussion on topic", "Justify your statements", "Respect alternative points of view", "Don't provoke conflicts"]}/>
        <QuestioningBoard WhoIsThisFor={`7. Moderation`} imageMarks={LogoMark} WhoInfo={["Moderation reserves the right to:", "delete messages that violate the rules", "edit content to improve readability", "restrict access to participants who systematically violate the rules"]}/>
        <h2>Moderation decisions are not subject to public discussion.</h2>
        <QuestioningBoard WhoIsThisFor={`8. Responsibility of participants`} imageMarks={LogoMark} WhoInfo={["Each member is responsible for the content they publish. The community exists for collaborative learning and requires informed participation."]}/>
        <QuestioningBoard WhoIsThisFor={`9. Rule changes`} imageMarks={LogoMark} WhoInfo={["The administration may update these rules without prior notice. The current version is always available on this page."]}/>
        <QuestioningBoard WhoIsThisFor={`10. Conclusion`} imageMarks={LogoMark} WhoInfo={["The purpose of these rules is to create an environment where it is comfortable to learn, ask questions, and understand complex issues."]}/>
    </div>
  )
}
