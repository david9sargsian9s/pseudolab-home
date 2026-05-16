import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import "./CodeMirrorConfig1.css"

export const CodeMirrorConfig1 = ({ code }) => {
  return (
    <div className='CodeMirrorConfig1'>
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
