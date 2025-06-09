import React, { useState } from "react";

function TwoStateForm(){

   const [FormData, setFormData] = useState({
      name : "",
      email : "",
      age : ""
   });
   const [errors, setErrors] = useState({
      name : '',
      email : '',
      age : ''
   });
   const [submitted, setSubmitted] = useState(false);

   const validateField = (name,value) => {
      switch(name) {
         case "name":
         return value.length > 0 && value.trim().length < 3 ? 'Name must be at least 3 characters.' : '';
         case "email":
         return value.length > 0 && !value.includes('@') ? 'Email must be valid.' : '';
         case 'age' :
            return value.length > 0 && Number(value) < 18 ? 'Age must be at least 18.' : '';
         default :
          return ''
      }
   }


   const handleChange = (event) => {
    const {name , value} = event.target;

    setFormData((prev) => ({
      ...prev,
      [name] : value
    }));
    setErrors((prev) => ({
      ...prev,
      [name] : validateField(name,value)
    }))
   };
   const handleSubmit = (e) => {
      e.preventDefault();

      const newError = {
         name : validateField("name", FormData.name),
         email : validateField("email", FormData.email),
         age : validateField("age", FormData.age)
      }

      const hasError = Object.values(newError).some(error => error)
      if(!hasError){
         setSubmitted(true)
      } else {
         setSubmitted(false)
      }
   }
 return (
    <>
    <div className="border-2 border-gray-600 w-1/2 p-4 mt-4">
       <h2 className="font-medium text-xl">Challenge - 6 Form Validation two state</h2>
       <form onSubmit={handleSubmit} className="space-y-4 mt-4">
         <input type="text" name="name" value={FormData.name} onChange={handleChange} placeholder="Enter Your Name" className="border border-gray-400 rounded px-2 py-1 w-full"></input><br />
         {errors && (<p className="text-red-600">{errors.name}</p>)}
         <input type="email" name="email" value={FormData.email} onChange={handleChange} placeholder="Enter Your Email" className="border border-gray-400 rounded px-2 py-1 w-full"></input><br />
         {errors && (<p className="text-red-600">{errors.email}</p>)}
         <input type="number" name="age" value={FormData.age} onChange={handleChange} placeholder="Enter Your age" className="border border-gray-400 rounded px-2 py-1 w-full"></input><br />
         {errors && (<p className="text-red-600">{errors.age}</p>)}
         <button className="bg-blue-800 text-white px-4 py-2 rounded">Submit</button>
         {submitted && (<p>✅ Form submitted successfully!</p>)}
       </form>
    </div>
    </>
 )
}

export default TwoStateForm;