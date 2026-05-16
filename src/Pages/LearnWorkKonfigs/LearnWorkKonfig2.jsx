import "./LearnConfig.css"
import { CodeMirrorConfig1 } from "../../components/CodeMirrorConfig1/CodeMirrorConfig1"
import { QuestioningBoard } from "../../components/QuestioningBoard/QuestioningBoard"
import logo from "../../AllImages/logo/BG-Removed-logo(PseudoLab.com).png"

export const LearnWorkKonfig2 = () => {
  return (
    <div className='LearnWorkKonfig2'>
        <h1>Basic principles of writing pseudocode:</h1>
        <p>Pseudocode should be human-readable, not compiler-readable. Use simple language and logical formulations.</p>
        <div className="ex1">
          <h2>❌ Bad:</h2>
          <CodeMirrorConfig1 code={`
int x = 0;
while(x < arr.length) { ... }
`}/>
        </div>
        <div className="ex1">
          <h2>✅ Better:</h2>
          <CodeMirrorConfig1 code={`
Set x = 0
While x is less than the array length:
...
`}/>
        </div>
        <h3>2. Independence from programming language</h3>
        <p>Pseudocode is not tied to the syntax of a specific language (JavaScript, Python, etc.).</p>
        <p>You cannot write strictly according to the rules of one language - otherwise it is already code, not pseudocode.</p>
        <hr />
        <h2>3. Clear structure</h2>
        <QuestioningBoard imageMarks={logo} WhoIsThisFor={"Use classic constructions:"} WhoInfo={["Subsequence","Condition (IF/ELSE)","Cycle (WHILE / FOR)"]}/>
        <p>Example:</p>
        <CodeMirrorConfig1 code={`
If the number is greater than 0:
Print "Positive"
Otherwise:
Print "Negative or zero"
`}/>
      <hr />
      <h2>4. Indents and readability</h2>
      <p>As in code, indentation helps you understand the nesting of logic.</p>
      <CodeMirrorConfig1 code={`
For each element in the list:
If the element is even:
Display the element
`}/>
      <hr />
      <h2>5. Minimum technical details</h2>
      <QuestioningBoard imageMarks={logo} WhoIsThisFor={"No need to describe:"} WhoInfo={["data types","semicolons","braces","syntactic trivia"]}/>
      <p>The main thing is <span id="logicTxt">logic</span>, not implementation.</p>
      <hr />
      <h2>6. Logical steps</h2>
      <QuestioningBoard imageMarks={logo} WhoIsThisFor={"Every action must be:"} WhoInfo={["consistent","meaningful","not contradicting the previous steps"]}/>
      <hr />
      <h2>7. Concreteness</h2>
      <p>Avoid vague wording:</p>
      <span>❌ "Process data"</span>
      <span>✅ "Sort array in ascending order"</span>
      <hr />
      <h2>8. Description of input and output data</h2>
      <p>Good pseudocode usually starts with understanding:</p>
      <CodeMirrorConfig1 code={`
Input: list of numbers
Output: sum of all numbers
`}/>
        <hr />
        <h2>Mini example of correct pseudocode</h2>
        <p>Problem: Find the sum of an array</p>
        <CodeMirrorConfig1 code={`
Input: array of numbers

Set sum to 0

For each number in the array:
Add the number to the sum

Display the sum
`}/>
        <hr />
    </div>
  )
}
