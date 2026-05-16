import "./About.css"
import { BillBoard } from "../../components/BillBoard/BillBoard"
import { ExplainingBoard3 } from "../../components/ExplainingBoard3/ExplainingBoard3"
import { QuestioningBoard } from "../../components/QuestioningBoard/QuestioningBoard"
import { PhilosophicalBlock } from "../../components/PhilosophicalBlock/PhilosophicalBlock"
import { MainBackBtns } from "../../components/MainBackBtns/MainBackBtns"
import questionMark from "../../AllImages/logo/BG-Removed-Logo2.png"
import { AppoarchBoard3 } from "../../components/AppoarchBoard3/AppoarchBoard3"
import { ALittleAbout2 } from "../../components/ALittleAbout2/ALittleAbout2"


export const About = () => {
  return (
    <div className="About">
        <h1 id="mainTitle">About the project</h1>

    <div className="adaptiveBlock">
      <h3 id="GeneralAboutInfo">This project was created to make programming understandable. Not through memorizing languages, but through understanding logic and algorithms.</h3>
    </div>

    <div className="adaptiveBlockFrombillboard">
      <BillBoard code={`
THOUGHT
"I want to increase the number"
↓
ALGORITHM
"On click +1"
↓
PSEUDOCODE
count = count + 1
↓
CODE
setCount(count + 1)
`}/>
    </div>

  <ExplainingBoard3 question={`WHY DID THIS PROJECT EMERGE?`} Exp3={`Most programming resources start with languages, syntax, and terminology. As a result, people memorize constructs but don't understand how to solve problems. This project was born as a response to this problem. We decided to start with where programming truly begins—with thinking.`}/>
          <h2>Our approach</h2>
          <ExplainingBoard3 question={`The role of pseudocode`} Exp3={`Pseudocode is not a separate language or simplified code. It's a way to describe a solution to a problem in understandable human language, while preserving the structure of the future program. We use pseudocode as a bridge between the idea and the actual code.`}/>   
            <AppoarchBoard3 Appoarchs={["Logic is more important than syntax", "Understanding instead of memorization", "Step-by-step thinking", "Minimum of excess"]} AppoarchsInfo={["Language is a tool, thinking is the basis.", "We'll explore why the solution works.", "Each task is broken down into simple steps.", "Only what really helps you learn."]}/>
          <div className="adaptiveBlockFrombillboard">

          
        <div className="Illustrations">
            <BillBoard code={`
SET products = ["apple", "banana", "orange"]

IF products contains "banana"
    PRINT "Product found"
ELSE
    PRINT "Product not found"

`}/>
          <BillBoard code={`
const products = ["apple", "banana", "orange"];

if (products.includes("banana")) {
  console.log("Product found");
} else {
  console.log("Product not found");
}

`}/>
          </div>

          </div>

    <div className="qBoards">
      <QuestioningBoard WhoIsThisFor={`Who is this project for?`} imageMarks={questionMark} WhoInfo={["For those who are just starting out in programming", "For those who have already written code but do not understand algorithms", "For self-taught people who want a solid foundation", "For students who need logic, not theory for theory's sake"]}/>
      <QuestioningBoard WhoIsThisFor={`What's not here`} imageMarks={questionMark} WhoInfo={["There is no memorization of syntax without meaning", "There are no “magic” solutions without explanations", "No overloaded tutorials", "There is no illusion that language = programming"]}/>
    <ALittleAbout2 mainaboutP={`A little bit personal`} finalP={`This project grew out of a real need: to understand programming, not just learn the language. If you feel like you're lacking structure and logic, then you've come to the right place.`}/>

    <PhilosophicalBlock PhilosophicalBlockinf={`Programming is a thinking skill. And that's where we suggest you start.`}/>

    <MainBackBtns MainText1={`Pseudolab.com`} MainText2={`your assistant in learning.`}/>
    </div>


    </div>
  )
}
