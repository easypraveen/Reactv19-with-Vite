function Button({ label="Submit", onClick=(() => alert('welcome')), rounded = true ? 'rounded' : 'rounded-none', size ,borderColor = "border-blue-300",bgColor="bg-blue-600" }) {
  let buttonSize;
  
  if(size === 'small'){
    buttonSize = `px-2 py-1 text-sm w-1/5 mb-4 block`
  } else if (size === 'medium') {
    buttonSize = `px-4 py-2 w-2/5 mb-4 block`
  } else {
    buttonSize = `w-full px-4 py-2 block`
  }
  const className = `${borderColor} ${bgColor} ${buttonSize} ${rounded} text-white border-2`;
  return <button onClick={onClick} className={className}>{label}</button>;
}

export default Button;
