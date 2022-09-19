import {useState} from "react";

export default function FontSize() {
  const [size, setSize] = useState(14);
  const minSize = 8
  const maxSize = 40
  return <div className="group">
    <div className="item spinbutton"
      role="spinbutton"
      tabIndex={-1}
      aria-valuenow={size}
      aria-valuetext="14pt"
      aria-valuemin={minSize}
      aria-valuemax={maxSize}
      aria-label="Font size in points">
      <span className="value">
        {size}pt
      </span>
      <span className="increase"

        onClick={() => setSize(Math.min(size + 1, maxSize))}>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12">
          <polygon className="increase"
            fill="#333"
            points="0,12 11,12 6,2"></polygon>
        </svg>
      </span>
      <span className="decrease"
        onClick={() => setSize(Math.max(size - 1, minSize))}
      >
        <svg xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12">
          <polygon className="decrease"
            fill="#333"
            points="0,2 11,2 6,12"></polygon>
        </svg>
      </span>
    </div>
  </div>
}
