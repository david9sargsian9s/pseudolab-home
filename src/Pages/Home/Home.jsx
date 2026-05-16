import { BillBoard } from "../../components/BillBoard/BillBoard"
import { ExplainingBoard1 } from "../../components/ExplainingBoard1/ExplainingBoard1"
import { ExplainingBoard2 } from "../../components/ExplainingBoard2/ExplainingBoard2"
import { QuestioningBoard } from "../../components/QuestioningBoard/QuestioningBoard"
import "./Home.css"
import questionMark from "../../AllImages/logo/BG-Removed-Logo2.png"
import { PhilosophicalBlock } from "../../components/PhilosophicalBlock/PhilosophicalBlock"
import { MainBackBtns } from "../../components/MainBackBtns/MainBackBtns"

export const Home = () => {
  return (
    <div className="Home">
            <MainBackBtns MainText1={`From idea to code`} MainText2={`Step by step`}/>
        <div className="MainCodeExample sectionConf1">
            <BillBoard code={`
SET numbers TO [1, 2, 3, 4, 5]
    SET sum TO 0

FOR EACH number IN numbers
    IF number IS EVEN
    ADD number TO sum
END IF
    ND FOR

PRINT sum
`} info={`Logic first. Code second.
 Pseudocode shows how a program thinks,
  not how it's written in a specific language.`}/>
        </div>
        <div className="explainingNum1 sectionConf1">
            <ExplainingBoard1 explain={`Pseudocode is an intermediate step between thought and code. There are no strict language rules here—only logic, steps, and structure. If you understand this algorithm, you can implement it in any language.`}/>
        </div>
        <div className="explainingNum2">
        </div>
            <ExplainingBoard2 platformExplain1={`What is this platform?`} platformExplain2={`This website is designed for those who want to truly understand programming.

We don't start with languages, frameworks, and complex syntax,
but with the most important things—algorithms, logic, and thought structure.

Here you learn to think like a programmer, not just copy-paste code.`}/>
        <div className="codeExample2">
            <h2>1. Structure of thinking</h2>
            <BillBoard code={`
START pageLayout

CREATE header
CREATE mainContent
CREATE footer

IF screenWidth < 768px
  STACK elements vertically
ELSE
  ALIGN elements in grid

END
    `} info={`Pseudocode is built like regular code, but does not require strict syntax—it is needed for thinking, not for compilation.`}/>
        </div>
            <ExplainingBoard1 explain={`With its help, beginners can quickly and easily master the basic structure of algorithms, and professionals can practice and quickly assemble prototypes of new projects.`}/>
        <div className="codeExample3">
            <h2>2. Focus on the user</h2>
            <BillBoard code={`
ON userOpenPage
  SHOW loader

FETCH content
IF contentLoaded
  HIDE loader
  DISPLAY content
ELSE
  SHOW errorMessage

`} info={`Pseudocode helps describe the behavior of an interface before any design or code is written.`}/>
        </div>
        <div className="adaptiveBlock">
          <ExplainingBoard1 explain={`If you used to write code quickly and on the fly, which resulted in a lot of errors and useless garbage, now you can design your projects more conveniently and correctly! Of course, it takes a lot of time, but it saves you from unnecessary fuss.`}/>
        </div>
        <div className="codeExample3">
            <h2>3. Interface logic</h2>
            <BillBoard code={`
IF userIsLoggedIn
  SHOW profileButton
  SHOW logoutButton
ELSE
  SHOW loginButton
  SHOW signupButton
`} info={`A good interface starts with simple logic described in human language.`}/>
        <ExplainingBoard1 explain={`Useful for beginners: design first -- code later`}/>
        </div>
        <div className="codeExample4">
          <h2>4. Adaptability</h2>
          <BillBoard code={`
CHECK deviceType

IF deviceType == mobile
  USE singleColumnLayout
ELSE IF deviceType == tablet
  USE twoColumnLayout
ELSE
  USE wideScreenLayout

`} info={`Pseudocode allows you to think about responsiveness in advance without touching CSS.`}/>
        <ExplainingBoard1 explain={`an even more correct project is provided`}/>
        </div>
        <div className="codeExample5">
          <h2>5. Working with attention</h2>
          <BillBoard code={`
WHEN userScrollsDown
  IF scrollPosition > heroSection
    SHOW stickyNavigation
  ELSE
    HIDE stickyNavigation

`} info={`The interface is a dialogue with the user, and pseudocode is its draft.`}/>
        <ExplainingBoard1 explain={`It's much easier to start with a program layout.`}/>
        </div>
        <div className="codeExample6">
          <h2>6. Minimum is better</h2>
          <BillBoard code={`
ON buttonClick
  DISABLE button
  SEND formData

IF requestSuccess
  SHOW successMessage
ELSE
  SHOW errorMessage

`} info={`If the logic can be explained in pseudocode, then it is simple enough for the user.`}/>
        <ExplainingBoard1 explain={`It's when the logic can be explained in pseudocode that the program is 70% complete.`}/>
        </div>
          <div className="codeExample7">
              <h2>7. Behavior of elements</h2>
              <BillBoard code={`
ON hover card
  INCREASE shadow
  SCALE card slightly

ON hoverEnd
  RESET shadow
  RESET scale

`} info={`Pseudocode describes not what an element looks like, but how it behaves.`}/>
      </div>
      <div className="questioningBoard">
        <QuestioningBoard WhoIsThisFor={`Who is this for?`} imageMarks={questionMark} WhoInfo={["For beginners", "For those who “studied the language but didn’t understand”", "For self-taught people", "For future developers"]} WhoInfoExplain={["You're just starting out and don't know where to start.", "The code is familiar, but the problems still can’t be solved.", "You want to build a mindset, not just a set of techniques.", "For those who want a strong foundation, not temporary knowledge."]}/>
      </div>
      <PhilosophicalBlock PhilosophicalBlockinf={`Programming isn't about knowing a language. It's about problem-solving and logical thinking.`}/>
      <div className="areReady">
        <h2>are you ready to start?</h2>
        <PhilosophicalBlock PhilosophicalBlockinf={`It doesn't matter which language you choose later. What matters is how you learn to think now.`}/>
              
      </div>
      <MainBackBtns MainText1={`Pseudolab.com`} MainText2={`your assistant in learning.`}/>
    </div>
  )
}
