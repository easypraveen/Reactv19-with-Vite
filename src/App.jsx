import UserForm from "./pages/UserForm"
import './App.css'
import TodoList from "./pages/TodoList"
import ChipsInput from "./pages/ChipsInput"
export const App = () => {
  return (
    <>
   <UserForm />
   <TodoList />
   <ChipsInput />
    </>
  )
}