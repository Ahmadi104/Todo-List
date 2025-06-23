import { useState } from "react";
import { FaEdit, FaCheck, FaTrash, FaUndo } from "react-icons/fa";
import toast from "react-hot-toast";

function TodoItem({ todo, deleteTask, toggleComplete, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    toast.success("Task Update Successfully");
    if (editText.trim() === "") return;
    updateTask(todo.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-2xl mx-auto">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400"
          />
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700"
          >
            save
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setEditText(todo.text);
            }}
            className="bg-gray-400 text-white px-3 py-2 rounded-md hover:bg-gray-500"
          >
            cancle
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={`flex-1 cursor-pointer select-none text-lg focus:outline-none transition-all duration-300 ${
              todo.completed
                ? "line-through text-gray-400 dark:text-gray-500"
                : "text-gray-800 dark:text-white"
            }`}
            aria-label={
              todo.completed ? "Mark as incomplete" : "Mark as complete"
            }
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleComplete(todo.id);
            }}
          >
            {todo.text}
          </span>

          <div className="flex gap-3">
            <button
              onClick={() => toggleComplete(todo.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow ${
                todo.completed
                  ? "bg-gray-400 hover:bg-gray-500 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
              aria-label={todo.completed ? "Undo complete" : "Mark as complete"}
            >
              {todo.completed ? (
                <>
                  <FaUndo className="inline-block mr-1" /> Undo
                </>
              ) : (
                <>
                  <FaCheck className="inline-block mr-1" /> Done
                </>
              )}
            </button>

            <button
              onClick={() => deleteTask(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow"
              aria-label="Delete task"
            >
              <FaTrash className="inline-block mr-1" /> Delete
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-sky-500 text-white px-3 py-2 rounded-md hover:bg-sky-600"
            >
              <FaEdit className="inline-block mr-1" /> Edit
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
