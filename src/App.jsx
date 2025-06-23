import { useState, useEffect } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import Header from "./component/Header";
import "./index.css";
import { Toaster } from "react-hot-toast";
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTasks = localStorage.getItem("todos");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (todo) => {
    const newTask = { id: Date.now(), text: todo, completed: false };
    setTodos([newTask, ...todos]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function updateTask(id, newText) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, text: newText } : todo;
      })
    );
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Toaster position="top-center" />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white dark:text-white mb-8">
          Stay Organized with Your Todo Tasks!
        </h1>
        <TodoForm addTask={addTask} />
        <TodoList
          todos={todos}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleComplete={toggleComplete}
        />
      </main>
    </div>
  );
}

export default App;
