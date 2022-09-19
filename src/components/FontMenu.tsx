import {useState} from "react"

export default function FontMenu() {
  const [expanded, setExpanded] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const fontFamilies = [
    "sans-serif",
    "serif",
    "monospace",
    "fantasy",
    "cursive",
  ]

  return <div className="menu-popup group">
    <button type="button"
      aria-haspopup={fontFamilies.length > 0}
      aria-controls="menu1"
      aria-expanded={expanded}
      className="item menu-button"
      tabIndex={expanded ? 0 : -1}
      aria-label="Font: Sans-serif"
      onClick={() => setExpanded(!expanded)}
      style={{textAlign: "left", width: "140px", fontFamily: fontFamilies[selectedIndex]} as React.CSSProperties}>
      {fontFamilies[selectedIndex]}
      <span></span>
    </button>
    {expanded &&
      <ul role="menu"
        id="menu1"
        aria-label="Font Family">
        {
          fontFamilies.map((family, index) => {
            return <li role="menuitemradio"
              aria-checked={index === selectedIndex}
              style={{fontFamily: family} as React.CSSProperties}
              onClick={() => setSelectedIndex(index)}
            >
              {family}
            </li>
          }
          )
        }
      </ul>
    }
  </div>
}
