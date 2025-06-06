import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  

  const [message, setMessage] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!name || !age || !email){
        setMessage(`❌ Please fill all the fields!`);
        return;
    }
    setMessage(`Hello ${name}! We sent confirmation to ${email}, Age: ${age}`);
  }
  return (
    <div className="p-4 border-2 border-gray-700 w-1/2 my-4">
      <h1 className="text-xl font-bold">User Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
         <input type="text" value={name} onChange={handleNameChange} placeholder="Enter Your Name" className="border border-gray-400 px-2 py-1 rounded"></input><br/>
         <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter Your email" className="border border-gray-400 px-2 py-1 rounded"></input><br/>
         <input type="number" value={age} onChange={handleAgeChange} placeholder="Enter Your age" className="border border-gray-400 px-2 py-1 rounded"></input><br/>
         <button type='submit' className="bg-blue-800 text-white px-2 py-1 rounded">Submit</button>
      </form>
      <p className="mt-4">Live Preview <strong>{name}</strong></p>
      {message && <p className="my-4">{message}</p>}
    </div>
  );
}

export default UserForm;
