import "./App.css";
import Header from "./pages/header";
import Footer from "./pages/footer";
import UserList from "./pages/userList";
import { useState } from "react";
import UserForm from "./pages/userForm";
import UserControllForm from "./pages/controlledForm";
import ExerciseForm from "./pages/exerciseForm";
import SkillForm from "./pages/skillForm";
import FormValidation from "./pages/formValidation";
import TwoStateForm from "./pages/twoStatesFrom";
import Button from "./ui-component/button";

function App() {
  const name = "praveen";
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("hi praveen singh");
  };
  return (
    <div className="p-4">
      <Header userName={name} />
      <Footer title="footer" />
      <UserList />
      <UserForm />
      <UserControllForm />
      <ExerciseForm />
      <SkillForm />
      <FormValidation />
      <TwoStateForm />
      <Button label="Click Me!" onClick={() => alert("Clicked")} />
      {/* <h1 className="text-3xl font-bold">Hello {name}</h1>
      <h1 className="text-3xl font-bold">count: {count}</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md mb-4"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <br></br>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleClick}
      >
        click Me!
      </button> */}
    </div>
  );
}

export default App;
