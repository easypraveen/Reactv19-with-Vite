import { useState } from "react";

function UserForm(){

    const [formData,setFormData] = useState({email : "", password : ""})
    const [user,setUser] = useState({email : "", password : ""})
    const handleChange = ((e) => {
        const {name, value} = e.target
        setFormData((prevData) => (
            {
                ...prevData, [name] : value
            }
        ))
        })
    const handleSubmit = ((e) => {
        e.preventDefault();
        setUser(formData)
    })
return (
    <>
    <h1>User Form</h1>
    <form onSubmit={handleSubmit} className="form">
        <div>
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off"></input>
        </div>
        <div>
            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} autoComplete="off"></input>
        </div>
        <button type="submit">Submit</button>
    </form>
    {user.email && user.password && (<p>My email is {user.email} and My password is {user.password}</p>)}
    </>
)
}

export default UserForm;