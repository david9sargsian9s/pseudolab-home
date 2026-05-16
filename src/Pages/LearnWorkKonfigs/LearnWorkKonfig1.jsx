import { AppoarchBoard2 } from "../../components/AppoarchBoard2/AppoarchBoard2"
import { CodeMirrorConfigOnExamplantion2 } from "../../components/CodeMirrorConfigOnExamplantion2/CodeMirrorConfigOnExamplantion2"
import { CodeMirrorConfig3 } from "../../components/CodeMirrorConfig3/CodeMirrorConfig3"
import { QuestioningBoard } from "../../components/QuestioningBoard/QuestioningBoard"
import "./LearnConfig.css"
import imageMark1 from "../../AllImages/logo/BG-Removed-Logo2.png"

export const LearnWorkKonfig1 = () => {
  return (
    <div className='LearnWorkKonfig1'>
        <h1>What is pseudocode?</h1>
        <p>Pseudocode is an informal, high-level description of an algorithm, combining elements of programming languages ​​with human language, intended for logical design rather than for execution by a computer.</p>
        <AppoarchBoard2 Appoarchs={["🧠 think through the logic","📋 explain the algorithm to another person", "🛠 Plan your program before writing code","📚 Understand the task at an interview or in studies"]}/>
        <div className="insimpleconfig">
          <p>It is a bridge between thought and code.</p>
          <CodeMirrorConfigOnExamplantion2 code={"Thought → Pseudocode → Code"}/>
        </div>
        <h2>Here are some interesting facts about pseudocode 👇</h2>
        <div className="interestingFactsHolding">
          <h3>1️⃣ Pseudocode is not a programming language. It doesn't have strict syntax rules like Python or Java. It's simply a way to describe an algorithm in understandable language.</h3>
          <h3>2️⃣ It can be written in different ways. There is no single standard.Two people can describe the same algorithm using different pseudocode, and both will be correct.</h3>
          <div className="examplantionFromLogic">
            <h3>3️⃣ It helps you think with logic, not code.</h3>
            <QuestioningBoard imageMarks={imageMark1} WhoIsThisFor={"Pseudocode is used to:"} WhoInfo={["plan a program","check the logic","simplify a complex algorithm","Before writing the actual code."]}/>
          </div>
          <div className="examplantionFromLogic">
            <h3>4️⃣ Often used in teaching</h3>
            <QuestioningBoard imageMarks={imageMark1} WhoIsThisFor={"In schools and universities, pseudocode helps to study:"} WhoInfo={["algorithms","cycles","conditions","data structures","Not tied to a specific language."]}/>
          </div>
          <h3>5️⃣ It is used in scientific articles</h3>
          <p>In computer science, algorithms are often described in pseudocode so that they can be understood by programmers in any language.</p>
        </div>
        <div className="example1">
          <h3>6️⃣ It looks like regular text</h3>
          <CodeMirrorConfig3 code={`
If the number is greater than 10,
output "Large number"
otherwise,
output "Small number"
`}/>
          <span>It reads almost like a human instruction manual.</span>
        </div>
        <div className="examplantionFromLogic">
            <h3>7️⃣ Pseudocode saves time</h3>
            <QuestioningBoard imageMarks={imageMark1} WhoIsThisFor={"It allows you to:"} WhoInfo={["quickly sketch out an idea","avoid errors in logic","don't get distracted by syntax"]}/>
          </div>
          <h3>8️⃣ Used in interviews</h3>
          <p>Some companies ask you to describe an algorithm in pseudocode to test your thinking rather than your knowledge of a specific language.</p>
    </div>
  )
}