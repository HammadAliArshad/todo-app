import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([
    // to store the new tasks in a array
    "Wake up at 6am",
    "Go to job",
    "Learn React",
  ]);
  const [newTask, setNewTask] = useState(""); // to write the new task and store it into the array

  function handleInput(event: any) {
    // to get the value of input field
    setNewTask(event.target.value);
  }

  function addTask() {
    // function to store the new written task into the existing array of tasks
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: any) {
    // to delete the tasks
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="container text-center">
        <h1>ToDo List</h1>
        <div>
          <input
            className="task-input"
            type="text"
            placeholder="Enter Task..."
            value={newTask}
            onChange={handleInput}
          />
          <button className="btn btn-dark add-btn" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
      <div className="list">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <input type="checkbox" />
              <button
                className="btn btn-danger"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
