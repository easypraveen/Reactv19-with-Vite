import { useState } from "react";

function UserControllForm(){
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        age : ''
    })
    const [message, setMessage] = useState('')
    const handleChange = ((e) => {
        const { name , value} = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name] : value
        }))
    })
    const handleSubmit = ((e) => {
      e.preventDefault();
      
      const {name , email, age} = formData;

      if(!name || !email || !age){
        setMessage('All field are required!');
        return;
      }
      
      setMessage(`Hello ${name}, confirmation sent to ${email}. Your age is ${age}.`)
    })
  return (
   <>
     <div className="p-4 border-2 border-gray-400 w-1/2 my-4">
        <h1 className="text-xl font-bold">User Controlled Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="border border-gray-400 px-2 py-1 w-full rounded"></input><br />
         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" className="border border-gray-400 px-2 py-1 w-full rounded"></input><br />
         <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Your Age" className="border border-gray-400 px-2 py-1 w-full rounded"></input><br />
         <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">Submit</button>
        </form>
        {message && (
            <p className="mt-4 text-green-700 font-semibold">{message}</p>
        )}
     </div>
   </>
  );
}

export default UserControllForm;