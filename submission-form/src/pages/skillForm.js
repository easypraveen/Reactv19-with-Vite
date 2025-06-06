import React, { useState } from "react";

function SkillForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const isDisabled = !formData.name || !formData.email.includes("@");
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true)
  };
  return (
    <>
      <div className="mt-4 p-4 border-2 border-gray-200 w-1/2 rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Skill Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="border border-gray-500 px-4 py-2 w-full rounded"
          ></input>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="border border-gray-500 px-4 py-2 w-full rounded"
          ></input>
          <fieldset className="mt-4">
            <legend className="font-medium">Select Your Select</legend>
            {["HTML", "CSS", "JavaScript", "React", "Node.js"].map((skill) => (
              <label key={skill} className="block">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleChange}
                  className="mr-2"
                ></input>
                {skill}
              </label>
            ))}
          </fieldset>
          <button
            type="submit"
            disabled={isDisabled}
            className={`text-white px-4 py-1 rounded ${isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-800"}`}
          >
            Submit
          </button>
        </form>
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-medium">Live Preview</h2>
          <p>
            Hello <strong>{formData.name || "___"}</strong>! Your email is{" "}
            <strong>{formData.email || "___"}</strong>.
          </p>
          <p>You have <span className="text-green-600 font-medium">skills</span> : {formData.skills.length > 0 ? formData.skills.join(", ") : "No skills selected"} </p>
          {submitted && (
            <p className="text-green-700 mt-2">
              ✅ “Form Submitted Successfully!”
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default SkillForm;
