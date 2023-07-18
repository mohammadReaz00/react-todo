import { useState } from "react";
import Header from "./assets/component/Header";
import TodoList from "./assets/component/TodoList";
import TodoForm from "./assets/component/TodoForm";
import Footer from "./assets/component/Footer";

const style = {
  bg: `h-screen p-4 bg-gradient-to-r from-violet-600 to-indigo-600`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  count: `text-center p-2`,
};

const App = () => {
  const [todos, setTodos] = useState([]);

  // Create todo
  const createTodo = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now() }]);
  };

  // Update todo
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <Header />
        <TodoForm createTodo={createTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
