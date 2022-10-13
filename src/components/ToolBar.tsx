import {useRef, useState, createRef, useEffect} from "react"
export default function ToolBar() {
  const [lastFocusedButtonIndex, setLastFocusedButtonIndex] = useState(0)
  const buttons = [
    {
      name: "Bold",
      icon: "format_bold",
      onClick: () => {document.execCommand("bold")}
    },
    {
      name: "change color",
      icon: "format_color_text",
      onClick: () => {document.execCommand('foreColor', false, '#e51c23')}
    },
    {
      name: "Copy",
      icon: "content_copy",
      onClick: () => {document.execCommand("copy")}
    },
    {
      name: "Paste",
      icon: "content_paste",
      onClick: () => {document.execCommand("paste")}
    },
    {
      name: "Cut",
      icon: "content_cut",
      onClick: () => {document.execCommand("cut")}
    }
  ]
  const refs = useRef(buttons.map(() => createRef<HTMLButtonElement>()))

  useEffect(() => {
    refs.current[lastFocusedButtonIndex].current?.focus()
  }, [lastFocusedButtonIndex])

  return <div className="format"
    role="toolbar"
    aria-label="Text Formatting"
    aria-controls="textarea1"
    tabIndex={0}
    onKeyDown={(e) => {
      switch (e.keyCode) {
        case 36:
          setLastFocusedButtonIndex(0)
          break
        case 37:
          setLastFocusedButtonIndex(Math.max(lastFocusedButtonIndex - 1, 0))
          break
        case 39:
          setLastFocusedButtonIndex(Math.min(lastFocusedButtonIndex + 1, buttons.length - 1))
      }
    }}>

    <div className="group characteristics" >
      {
        buttons.map((v, i) => {
          return <>
            <button type="button" value={v.name} onClick={() => {setLastFocusedButtonIndex(i); v.onClick()}} tabIndex={lastFocusedButtonIndex === i ? 0 : -1} ref={refs.current[i]}><span className="material-icons">{v.icon}</span></button>
          </>
        })
      }
    </div>
  </div>
}
