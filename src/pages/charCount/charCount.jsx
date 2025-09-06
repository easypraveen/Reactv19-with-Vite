import { useState } from 'react';
import "./charCount.css"

function CharacterCount() {

  function handleChange(e) {
    setCharCount(e.target.value)
   }

  const [maxLength, setMaxLength] = useState(50);
  const [charCount, setCharCount] = useState("");

  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input type="number" min="0" max="1000" data-testid="maxlength" onChange={(e) => setMaxLength(e.target.value)} />
          </label>
        </div>
        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          onChange={handleChange}
        ></textarea>

        <div className="char-info" data-testid="char-info">{`${charCount.length} / ${maxLength === "" ? 50 : maxLength}`}</div>

        <div className="warnings">
          {(charCount.length / maxLength * 100) === 90 && <p className="warning-text" data-testid="warning-text">You are close to the limit!</p>}
         

          {(charCount.length / maxLength) > 1 && <p className="error-message" data-testid="error-text">Limit exceeded by {charCount.length - maxLength} characters</p>}
          
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;