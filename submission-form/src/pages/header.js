import React from "react";

function Header(props) {
  const isLoggedIn = false;
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  return (
    <div className="pb-4">
      <h1>welcome to the react {props.userName}</h1>
      <h1>{isLoggedIn ? 'Welcome Back' : 'Please login again'}</h1>
      {isLoggedIn && <p>This text is shown only if `isLoggedIn` is true.</p>}
      <h2 className="font-meduim text-xl py-4">Fruits List</h2>
      <ul>
        {fruits.map((fruit , index) => (
            <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Header;