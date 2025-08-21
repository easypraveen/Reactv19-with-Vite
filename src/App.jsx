import UserForm from "./pages/UserForm"
import './App.css'
import TodoList from "./pages/TodoList"
import ChipsInput from "./pages/ChipsInput"
import FaqAccordion from "./pages/FaqAccordian"
export const App = () => {
  return (
    <>
   <UserForm />
   <TodoList />
   <ChipsInput />
   <FaqAccordion />
    </>
  )
}