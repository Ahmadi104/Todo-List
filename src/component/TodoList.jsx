/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTask, toggleComplete, updateTask }) {
  return (
    <section className="w-full px-4 sm:px-6 md:px-0 mt-6">
      <div className="max-w-2xl mx-auto">
        {todos.length === 0 ? (
          <div className="text-center font-bold text-gray-500 dark:text-gray-400 py-8 text-lg">
            No tasks added yet.
          </div>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTask={deleteTask}
                updateTask={updateTask}
                toggleComplete={toggleComplete}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default TodoList;
