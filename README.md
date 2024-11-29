
# Detailed Description of the To-Do List App

## Introduction
**This is a To-Do List App created using React.**  
In this project, I learned about **hooks, event handling, and how to create and use components.**  

---

## Components Overview

### AddTaskForm.jsx:
- This component is responsible for adding new tasks to the list.
- It initializes a `useState` hook with an empty string to manage the input state.
- It contains:
  - **A Form** with:
    - **Input Field**: Includes an `onChange` event handler to capture and update user input dynamically.
    - **Submit Button**: When clicked, it triggers the `handleSubmit` function.

### ToDoItem.jsx:
- This component is responsible for displaying individual tasks and their associated actions.
- Each task is displayed with:
  - **Delete Button**: Removes the task from the list when clicked.
  - **Mark as Complete Button**: Toggles the completion status of the task.

### App Component:
- The main component where state is managed and other components are rendered.
- It maintains the list of tasks and passes the necessary props (`addTask`, `deleteTask`, `toggleCompleteTask`) to child components.

---

## Key Functionalities

### AddTaskForm Functionality:
#### Input Handling:
- The `onChange` event updates the `useState` hook whenever the user types something in the input field.

#### Form Submission:
- When the **Submit Button** is clicked:
  - The `handleSubmit` function executes:
    - Uses `preventDefault()` to prevent the page from reloading.
    - Calls the `addTask` function:
      - Adds the current input task (including its `completed` status set to `false`) to the existing list of tasks.
      - Resets the input field to an empty string.

### Task Management:
#### Delete Task:
- Clicking the **Delete Button** triggers the `deleteTask` function:
  - Removes the selected task from the list by filtering it out using its index.

#### Mark Task as Complete:
- Clicking the **Mark as Complete Button** toggles the `completed` status of the task:
  - The `toggleCompleteTask` function updates the specific task's `completed` property using the task's index.
  - This is achieved by mapping through the list of tasks and applying changes only to the target task.

### Task Rendering:
- The `App` component renders the list of tasks using the **ToDoItem** component for each task, passing required props such as:
  - `task` (the task data).
  - `onDelete` (function to delete the task).
  - `onToggleComplete` (function to toggle the task’s completion status).

---

## Styling and User Experience
- Tasks are displayed in a structured list (`<ul>`).  
- Each task includes buttons for **deletion** and **completion**, providing a clean and user-friendly interface.  
- The app ensures invalid or empty input cannot be added, improving functionality and preventing errors.

---

## Challenges faced
- Initially while building the app i was unable to break the complete task into components but later on i was able to break it
- while handling the handleDelete function logic i was creating a copy of alread existing task and then only i would be removing the respective index task
- The next challenge i faced was handling  states across components 
