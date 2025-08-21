import React, { useState } from 'react';
import { colorNameToHex } from "../utils/mockData";

const ColorExplorer = () => {

  const [color, setColor] = useState("");
  const [colorName, setColorName] = useState(null);
  const [error,setError] = useState("")
  const handleColorName = () => {
    const hex = colorNameToHex(color.trim().toLowerCase());
    if (hex) {
      setColorName({ name: color, hex });
      setError("")
    } else {
      setError("Sorry, I couldn't recognize that color.")
      setColorName(null)
    }
  }
  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
        />
        <button data-testid="search-button" onClick={handleColorName}>
          🔍
        </button>
      </div>
      {error && (
        <p className="error" data-testid="error-msg">{error}</p>
      )}
      {colorName && (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            style={{ backgroundColor: colorName.hex }}
            role="presentation"
            data-testid="color-preview"
          ></div>
          <p data-testid="color-name">
            <strong>Name: {colorName.name}</strong>
          </p>
          <p data-testid="color-hex">
            <strong>Hex: {colorName.hex}</strong>
          </p>
        </div>
        )}

    </div>
  );
};

export default ColorExplorer;
