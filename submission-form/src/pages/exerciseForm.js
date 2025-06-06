import React, { useState } from "react";

function ExerciseForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    hobbies: [],
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const {name , value , type , checked} = e.target;
    debugger;
    if(type === "checkbox"){
        setFormData((prev) => ({
            ...prev,
            hobbies : checked ? [...prev.hobbies, value] : prev.hobbies.filter((hobby) => hobby !== value)
        }))
    } else {
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const {name , gender, hobbies} = formData;

    if(!name || !gender || !hobbies.length === 0){
      setMessage("Please fill all required fields and select at least one hobby.");
      return;
    }

    setMessage(
      `Hi ${name}, we've saved your profile with ${gender}  and hobbies: ${hobbies}`
    );
  };

  return (
    <>
      <div className="border border-grey-800 p-4 mt-4 w-1/2">
        <h1 className="text-xl font-semibold">Challenge 5</h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="border border-gray-500 w-full px-4 py-2 rounded"
          ></input>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="border border-gray-500 w-full px-4 py-2 rounded"
          ></input>
          <br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            className="border border-gray-500 w-full px-4 py-2 rounded"
          ></input>
          <br />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-500 px-2 py-2 rounded"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
          <fieldset className="mt-2">
            <legend className="font-medium">Select Your Hobbies</legend>
            {["Reading", "Coding", "Sports"].map((hobby) => (
              <label key={hobby} className="block">
                <input
                  type="checkbox"
                  name="hobbies"
                  value={hobby}
                  checked={formData.hobbies.includes(hobby)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {hobby}
              </label>
            ))}
          </fieldset>
        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Submit
          </button>
        </form>

        {message && (
          <p className="mt-4 text-green-600 font-semibold">{message}</p>
        )}
      </div>
    </>
  );
}

export default ExerciseForm;
