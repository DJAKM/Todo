import { useState } from 'react'
import './App.css'
import AddTaskForm from './Components/AddTaskForm'
import ToDoItem from './Components/ToDoItem'

function App() {
  const [tasks, setTasks] = useState([]);
  //it will store the tasks that come from addTaskform component
  
  const addTask = (taskText) =>{
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
    } else {
      alert('Please enter a valid task!');
    }
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleCompleteTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <h1>To-do-List</h1>
      <AddTaskForm onAddTask={addTask}/>
      <ul>
      {
        tasks.map((task,index) => (
          <ToDoItem
          key={index}
          task={task}
          onDelete = {()=>deleteTask(index)}
          onToggleComplete = {()=>toggleCompleteTask(index)}/>
        ))
      }
      </ul>
    </>
  )
}

export default App
