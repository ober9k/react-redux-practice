import './App.css'
import Counter from "./features/counter/Counter.tsx";
import Todos from "./features/todos/Todos.tsx";

function App() {
  return (
    <>
      <h1>React + Redux</h1>
      <h2>Todos</h2>
      <Todos/>
      <h2>Counter 1</h2>
      <Counter/>
      <h2>Counter 2</h2>
      <Counter/>
    </>
  )
}

export default App
