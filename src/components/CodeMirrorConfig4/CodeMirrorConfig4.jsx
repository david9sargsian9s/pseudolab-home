import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import "./CodeMirrorConfig4.css"

export const CodeMirrorConfig4 = ({ code }) => {
  return (
    <div className='CodeMirrorConfig4'>
        <CodeMirror
          value={code}
          theme={dracula}
          editable={false}
          width='100%'
          height='100rem'
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log('value:', value);
          }}
        />
    </div>
  )
}
