import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {name: 'milk cow', priority: 'low', completed: false},
    {name: 'make cheese', priority: 'high', completed:true},
    {name: 'eat cheese', priority: 'high', completed: false}
    ]) 

  const [newTask, setNewTask] = useState('');

  const tasksNodes = tasks.map((task, index) => {
    if (task.completed === false) {
      return (
        <li key={index} className= {task.priority}>
          <h2>{task.name}</h2>
        <button className='button' onClick={() => {handleTaskComlpeted(index)}}>Completed</button>
        </li>
      )
    }
  });

  const completedTasksNodes = tasks.map((task, index) => {
    if (task.completed === true) {
      return (
      <li key={index} className='completed'>
        <h2>{task.name}</h2>
      </li>
      )
    };
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleTaskComlpeted = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].completed = true;
    setTasks(copyTasks);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({
      name: newTask,
      priority: event.target.priority.value,
      completed: false
    })
    setTasks(copyTasks);
    setNewTask('');
  }

  
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      
      <form onSubmit={saveNewTask}>
        <div className='task-name'>
          <label htmlFor='add-task'>Add Task:</label>
          <input id='add-task' type='text' name='name' value={newTask} onChange={handleTaskInput} required placeholder='enter task'/>
        </div>
        <div className='radio'>
          <label htmlFor='priority'>Priority:</label>
          <input className='radio-button' id='priority' type='radio' name='priority' value='high'/><span>high</span>
          <input className='radio-button' id='priority' type='radio' name='priority' value='low'/><span>low</span>
        </div>
        <input className='button' type='submit' value='save task'/>
      </form>
      <h2>To Do</h2>
      <ul>
        {tasksNodes}
      </ul>
      <h2>Done</h2>
      <ul>
        {completedTasksNodes}
      </ul>
    </div>
  );
}

export default App;
