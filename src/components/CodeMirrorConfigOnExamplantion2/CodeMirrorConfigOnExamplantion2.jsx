import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import "./CodeMirrorConfigOnExamplantion2.css"

export const CodeMirrorConfigOnExamplantion2 = ({ code }) => {
  return (
    <div className='CodeMirrorConfigOnExamplantion2'>
        <CodeMirror
          value={code}
          theme={dracula}
          editable={false}
          basicSetup={false}
          height="200px"
          width="450px"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log('value:', value);
          }}
        />
    </div>
  )
}
