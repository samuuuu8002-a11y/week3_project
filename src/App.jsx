import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React", completed: true },
    { id: 2, name: "Practice Components", completed: false },
    { id: 3, name: "Create Project", completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Day 5: Task List</h1>
      <p>React Lists & Conditional Rendering</p>

      {tasks.length === 0 ? (
        <h3>No tasks available</h3>
      ) : (
        <div>
          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <span className={task.completed ? "done" : ""}>
                {task.name}
              </span>

              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Completed" : "Complete"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;