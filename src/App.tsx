function App() {
  return (
    <>
      <div className="format"
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
        <div className="menu-popup group">
          <button type="button"
            aria-haspopup="true"
            aria-controls="menu1"
            className="item menu-button"
            tabIndex={-1}
            aria-label="Font: Sans-serif"
            style="text-align: left; width: 140px; font-family: sans-serif">
            SANS-SERIF
            <span></span>
          </button>
          <ul role="menu"
            id="menu1"
            aria-label="Font Family">
            <li role="menuitemradio"
              aria-checked="true"
              style="font-family: sans-serif">
              Sans-serif
            </li>
            <li role="menuitemradio"
              aria-checked="false"
              style="font-family: serif">
              Serif
            </li>
            <li role="menuitemradio"
              aria-checked="false"
              style="font-family: monospace">
              Monospace
            </li>
            <li role="menuitemradio"
              aria-checked="false"
              style="font-family: fantasy">
              Fantasy
            </li>
            <li role="menuitemradio"
              aria-checked="false"
              style="font-family: cursive">
              Cursive
            </li>
          </ul>
        </div>
        <div className="group">
          <div className="item spinbutton"
            role="spinbutton"
            tabIndex={-1}
            aria-valuenow={14}
            aria-valuetext="14pt"
            aria-valuemin={8}
            aria-valuemax={40}
            aria-label="Font size in points">
            <span className="value">
              14pt
            </span>
            <span className="increase">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12">
                <polygon className="increase"
                  fill="#333"
                  points="0,12 11,12 6,2"></polygon>
              </svg>
            </span>
            <span className="decrease">
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
      <label htmlFor="textarea1" className="hidden">
        Text Sample
      </label>
      <br />
      <textarea id="textarea1"
        rows={20}
        cols={80}
        style="font-family: sans-serif">
        Abraham Lincoln's Gettysburg Address

        Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

        Now we are engaged in a great civil war, testing whether that nation, or any nation, so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

        But, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow, this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us, that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion, that we here highly resolve that these dead shall not have died in vain, that this nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not perish from the earth.
      </textarea>
    </>);
}

export default App;
