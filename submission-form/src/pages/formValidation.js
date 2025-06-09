import { useState } from "react";

function FormValidation(){
  
    const [formData , setFormData] = useState({
        name : '',
        email : '',
        password : '',
        confirmPassword : ''
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = ((event) => {
     const {name , value} = event.target;
        setFormData((prev) => (
            {
             ...prev,
             [name] : value
            }
          ))
    });
    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    const isPasswordStrong = (password) => {
        if(password.length < 6) return "week";
        if(password.length < 10) return "medium"
        return "strong"
    }
    const isFormValid = 
    formData.name.length >= 3 &&
    isEmailValid(formData.email) &&
    formData.password.length >= 6 &&
    formData.password === formData.confirmPassword;

    const handleSubmit = (event) => {
     event.preventDefault();
     setSubmitted(true)
    }
  return (
    <>
    <div className="border-2 border-gray-500 w-1/2 p-4 mt-4">
      <h2 className="font-medium text-xl">Signup Form with Live Error Messages</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="border border-gray-300 px-4 py-2 w-full rounded"></input><br />
        {formData.name.length > 0 && formData.name.length < 3 && (<span className="mt-1 ml-1 text-red-600 text-sm">Name must be at least 3 characters.</span>)}
        </div>
        <div>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" className="border border-gray-300 px-4 py-2 w-full rounded"></input><br />
        {formData.email.length > 0 && !isEmailValid(formData.email) && (<span className="mt-1 ml-1 text-red-600 text-sm">Email must be valid.</span>)}
        </div>
        <div>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" className="border border-gray-300 px-4 py-2 w-full rounded"></input><br />
        {formData.password.length > 0 && formData.password.length < 6 && (<span className="mt-1 ml-1 text-red-600 text-sm block">Password must be at least 6 characters.</span>)}
        {formData.password.length > 0 && (<span className="mt-1 ml-1">Password is <strong>{isPasswordStrong(formData.password)}</strong></span>)}
        </div>
        <div>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Enter Your confrim Password" className="border border-gray-300 px-4 py-2 w-full rounded"></input><br />
        {formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword && (<span className="mt-1 ml-1 text-red-600 text-sm">Passwords do not match.</span>)}
        </div>
        <button type="submit" disabled={!isFormValid} className={`text-white rounded px-4 py-2 ${isFormValid ? 'bg-blue-700' : 'bg-gray-500 cursor-not-allowed'}`}>Submit</button>
      </form>
      <div className="mt-4 border-t-2">
        <h2 className="mt-4 text-xl font-medium">Live Preview</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
        {submitted && isFormValid && <p className="text-green-600 mt-4">✅ Form submitted successfully!</p>}
      </div>
    </div>
    </>
  )
}

export default FormValidation;