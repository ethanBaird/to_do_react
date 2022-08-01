import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(['milk cow', 'make cheese', 'eat cheese']) 

  const tasksNodes = tasks.map((task, index) => {
    return (
      <li>
        {task}
      </li>
    )
  });
  
  return (
    <div className="App">
      <h1>To Do's</h1>
      
      <form>
        <label htmlFor='add-task'>Add Task:</label>
        <input id='new-task' type='text'/>
      </form>

      <ul>
        {tasksNodes}
      </ul>
    </div>
  );
}

export default App;
