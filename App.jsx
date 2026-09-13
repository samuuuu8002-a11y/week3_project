import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      name: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <p>React Week 2 Final Project</p>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.length === 0 ? (
          <h3>No tasks yet. Add your first task!</h3>
        ) : (
          tasks.map((item) => (
            <div className="task" key={item.id}>
              <span className={item.completed ? "completed" : ""}>
                {item.name}
              </span>

              <div>
                <button onClick={() => completeTask(item.id)}>
                  {item.completed ? "Undo" : "Complete"}
                </button>

                <button
                  className="delete"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;