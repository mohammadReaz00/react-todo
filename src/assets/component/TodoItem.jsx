/* eslint-disable react/prop-types */
import { FaRegTrashAlt } from "react-icons/fa";

const todoStyles = {
  listItem: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  listItemComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  text: `ml-2 cursor-pointer font-bold`,
  textComplete: `ml-2 cursor-pointer line-through`,
};

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const listItemClasses = todo.completed ? todoStyles.listItemComplete : todoStyles.listItem;
  const textClasses = todo.completed ? todoStyles.textComplete : todoStyles.text;

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className={listItemClasses}>
      <div className="flex">
        <input onChange={handleToggleComplete} type="checkbox" checked={todo.completed} />
        <p onClick={handleToggleComplete} className={textClasses}>
          {todo.text}
        </p>
      </div>
      <button onClick={handleDeleteTodo}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default TodoItem;
