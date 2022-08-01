import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {name: 'milk cow', priority: 'low'},
    {name: 'make cheese', priority: 'high'},
    {name: 'eat cheese', priority: 'high'}
    ]) 

  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('')

  const tasksNodes = tasks.map((task, index) => {
    return (
      <li key={index} className= {task.priority}>
        {task.name}
      </li>
    )
  });

  const handleTaskNameInput = (event) => {
    setNewTaskName(event.target.value)
  }

  const handleTaskPriorityInput = (event) => {
    setNewTaskPriority(event.target.value)
  }


  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({
      name: newTaskName,
      priority: newTaskPriority
    })
    setTasks(copyTasks);
    setNewTaskName('');
  }

  
  
  return (
    <div className="App">
      <h1>To Do's</h1>
      
      <form onSubmit={saveNewTask}>
        <div className='task-name'>
          <label htmlFor='add-task'>Add Task:</label>
          <input id='add-task' type='text' value={newTaskName} onChange={handleTaskNameInput}/>
        </div>
        <div className='radio'>
          <label htmlFor='priority'>Priority:</label>
          <input className='radio-button' id='priority' type='radio' name='priority' value='high' onChange={handleTaskPriorityInput} /><span>high</span>
          <input className='radio-button' id='priority' type='radio' name='priority' value='low' onChange={handleTaskPriorityInput}/><span>low</span>
        </div>
        <input className='button' type='submit' value='save task'/>
      </form>

      <ul>
        {tasksNodes}
      </ul>
    </div>
  );
}

export default App;
