import FontMenu from "./FontMenu"
import FontSize from "./FontSize"
import {useRef, RefObject, useState, createRef, useEffect} from "react"
export default function ToolBar() {
  const [lastFocusedButtonIndex, setLastFocusedButtonIndex] = useState(0)
  const [IsToolBarFocused, setIsToolBarFocused] = useState(false)
  const buttons = [
    {
      name: "Bold",
      onClick: () => {document.execCommand("bold")}
    },
    {
      name: "change color",
      onClick: () => {document.execCommand("bold")}
    },
    {
      name: "Copy",
      onClick: () => {document.execCommand("copy")}
    },
    {
      name: "Paste",
      onClick: () => {document.execCommand("paste")}
    },
    {
      name: "Cut",
      onClick: () => {document.execCommand("cut")}
    }
  ]
  const refs = useRef(buttons.map(() => createRef<HTMLButtonElement>()))

  useEffect(() => {
    refs.current[lastFocusedButtonIndex].current?.focus()
  }, [lastFocusedButtonIndex, IsToolBarFocused])

  return <div className="format"
    role="toolbar"
    aria-label="Text Formatting"
    aria-controls="textarea1"
    tabIndex={0} onFocus={() => {refs.current[lastFocusedButtonIndex].current?.focus()}} onKeyDown={(e) => {
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

    <div className="group characteristics">
      {
        buttons.map((v, i) => {
          return <>
            <button type="button" value={v.name} onClick={() => {v.onClick()}} tabIndex={-1} ref={refs.current[i]}>{v.name}</button>
          </>
        })
      }
    </div>
  </div>
}
