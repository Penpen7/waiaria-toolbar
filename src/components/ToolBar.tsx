import FontMenu from "./FontMenu"
import FontSize from "./FontSize"
export default function ToolBar() {
  return <div className="format"
    role="toolbar"
    aria-label="Text Formatting"
    aria-controls="textarea1">
    <div className="group characteristics">
      <button type="button"
        className="item bold popup"
        aria-pressed="false"
        value="bold"
        tabIndex={0}>
        <span className="fas fa-bold" aria-hidden="true"></span>
        <span className="popup-label">
          Bold
        </span>
      </button>
      <button type="button"
        className="item italic popup"
        aria-pressed="false"
        value="italic"
        tabIndex={-1}>
        <span className="fas fa-italic" aria-hidden="true"></span>
        <span className="popup-label">
          Italic
        </span>
      </button>
      <button type="button"
        className="item underline popup"
        aria-pressed="false"
        value="underline"
        tabIndex={-1}>
        <span className="fas fa-underline" aria-hidden="true"></span>
        <span className="popup-label">
          Underline
        </span>
      </button>
    </div>
    <div className="group"
      role="radiogroup"
      aria-label="Text Alignment">
      <button type="button"
        role="radio"
        className="item align-left popup"
        aria-checked="true"
        tabIndex={-1}>
        <span className="fas fa-align-left" aria-hidden="true"></span>
        <span className="popup-label">
          Text Align Left
        </span>
      </button>
      <button type="button"
        role="radio"
        className="item align-center popup"
        aria-checked="false"
        tabIndex={-1}>
        <span className="fas fa-align-center" aria-hidden="true"></span>
        <span className="popup-label">
          Text Align Center
        </span>
      </button>
      <button type="button"
        role="radio"
        className="item align-right popup"
        aria-checked="false"
        tabIndex={-1}>
        <span className="fas fa-align-right" aria-hidden="true"></span>
        <span className="popup-label">
          Text Align Right
        </span>
      </button>
    </div>
    <div className="group">
      <button type="button"
        className="item copy"
        aria-disabled="true"
        tabIndex={-1}>
        Copy
      </button>
      <button type="button"
        className="item paste"
        aria-disabled="true"
        tabIndex={-1}>
        Paste
      </button>
      <button type="button"
        className="item cut"
        aria-disabled="true"
        tabIndex={-1}>
        Cut
      </button>
    </div>
    <FontMenu />
    <FontSize />
    <div className="group">
      <label className="input">
        <input id="checkbox"
          className="item nightmode"
          type="checkbox"
          tabIndex={-1} />
        Night Mode
      </label>
      <a id="link"
        className="item link"
        href="help.html"
        tabIndex={-1}>
        Help
      </a>
    </div>
  </div>
}
