import { CodeMirrorConfig1 } from "../CodeMirrorConfig1/CodeMirrorConfig1"
import "./BillBoard.css"


export const BillBoard = ( { code, info }) => {
  return (
    <div className="BillBoard">
        <div className="codeboard">
          <CodeMirrorConfig1 code={code}/>
        </div>
        <div className="infoBoard">
          <h1>{info}</h1>
        </div>
    </div>
  )
}
