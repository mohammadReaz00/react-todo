/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const styles = {
  form: "flex justify-between",
  input: "border p-2 w-full text-xl",
  button: "border p-4 ml-2 bg-purple-500 text-slate-100",
};

const TodoForm = ({ createTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    createTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Add Todo"
      />
      <button type="submit" className={styles.button}>
        <AiOutlinePlus size={30} />
      </button>
    </form>
  );
};

export default TodoForm;
