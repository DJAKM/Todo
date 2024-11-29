import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
// it will fetch each user input and then
// will be stored in the 
//useState hook present in
// the app.jsx component
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter new Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
