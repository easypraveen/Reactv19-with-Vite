function Button({ label, onClick }) {
  return <button onClick={onClick}>{label || "Submit"}</button>;
}

export default Button;
