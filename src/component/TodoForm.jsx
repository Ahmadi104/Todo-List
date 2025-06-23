import { useState } from "react";

export default function TodoForm({ addTask }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError("Task cannot be empty.");
      return;
    }
    addTask(task.trim());
    setTask("");
    setError("");
  };

  return (
    <section className="w-full px-4 py-6 sm:px-6 md:px-0">
      <div className="max-w-full mx-auto bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-lg shadow-gray-950 p-6 md:p-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:flex-row sm:items-end"
        >
          <div className="flex-1">
            <label
              htmlFor="task"
              className="block text-white font-medium mb-2 text-sm sm:text-base"
            >
              Enter your task
            </label>
            <input
              id="task"
              type="text"
              placeholder="enter your new task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
              className={`w-full p-3 border ${
                error ? "border-red-400" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              aria-describedby={error ? "task-error" : undefined}
            />
            {error && (
              <p
                id="task-error"
                className="text-red-500 text-xs mt-1 pl-1 font-medium"
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all"
          >
            Add Your Task
          </button>
        </form>
      </div>
    </section>
  );
}
