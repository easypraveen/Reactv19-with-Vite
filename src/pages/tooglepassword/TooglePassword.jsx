import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../tooglepassword/tooglepassword.css"

function TogglePassword() {

  const [showPassword,setShowPassword] = useState(false)
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {showPassword ? "Password Visible" : "Password Hidden"}
      </span>
    </div>
  );
}

export default TogglePassword;