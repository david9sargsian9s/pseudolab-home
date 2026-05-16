import "./CodeMirrorConfig2.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";
import { DownloadSVG } from "../../SVG/DownloadSVG";
import { FilecodeSVG } from "../../SVG/FilecodeSVG";
import { CloseSVG } from "../../SVG/CloseSVG";

export const CodeMirrorConfig2 = ({ DafaultCode, onCloseDoc }) => {
  const [code, setCode] = useState(DafaultCode || "");
  const [copiedType, setCopiedType] = useState(null);
  const [saved, setSaved] = useState("");
  const [openSavingWindow, setOpenSavingWindow] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopiedType("text");

    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleSave = () => {
    if (!saved) {
      setSaved("temp");
      return;
    }
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${saved}`;
    a.click();
    URL.revokeObjectURL(url);
    setSaved("")
  };

  return (
    <div className="CodeMirrorConfig2">
      {copiedType === "text" && (
        <div className="textcopymessage">
          text copied!
        </div>
      )}

      <div className="editor-toolbar">
        <button className="toolbar-btns b1" onClick={handleCopy}>
          <FilecodeSVG/>
        </button>
        <button className="toolbar-btns b2" onClick={() => setOpenSavingWindow(!openSavingWindow)}>
          <DownloadSVG/>
        </button>
        {openSavingWindow && (
          <div className="InSaveHolding">
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}>
              <input type="text" placeholder="Enter document name and extension. . ." value={saved === "temp" ? "" : saved} onChange={(e) => setSaved(e.target.value)}/>
            </form>
          </div>
        )}
        <button className="toolbar-btns b3" onClick={onCloseDoc}>
          <CloseSVG/>
        </button>
      </div>

      <CodeMirror
        value={code}
        height="200px"
        width="450px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value) => {
          setCode(value);
        }}
      />
    </div>
  );
};
