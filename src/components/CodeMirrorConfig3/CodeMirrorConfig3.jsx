import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import "./CodeMirrorConfig3.css"
import { useEffect, useState } from 'react';

export const CodeMirrorConfig3 = ({ code }) => {

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 440 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 440);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='CodeMirrorConfig1'>
        <CodeMirror
          value={code}
          theme={dracula}
          editable={false}
          basicSetup={false}
          height={isMobile ? "150px" : "200px"}
          width={isMobile ? "340px" : "450px"}
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log('value:', value);
          }}
        />
    </div>
  )
}
