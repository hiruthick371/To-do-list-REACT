import React,{useState} from "react";

function Todolist(){
  const[tasks,setTasks] = useState(["eat","sleep","repeat"]);
  const[newTask,setNewTask] = useState([]);

  function handleInputChange(event){

    setNewTask(event.target.value);

  }
  function addTask(){
    if(newTask.trim()!==""){
    setTasks(t=>[...t,newTask]);
    setNewTask("");
    }

  }
  function removeTask(index){
    setTasks(t=>t.filter((task,i)=>i!=index));
    setNewTask("");

  }
  function moveTaskUp(index){
    if(index>0){
      const updatedTasks =[...tasks];
      [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index<tasks.length-1){
      const updatedTasks =[...tasks];
      [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }
  return(<>
  <div className="to-do-list">
    <h1>To - Do - List 💕</h1>
  </div>

  <div>

      <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
      <button className="add-button" onClick={addTask}>add</button>
  </div>

  <ol>
    {tasks.map((task,index)=>
    <li key={index}><span className="text">{task}</span>
    <button className="delete-button" onClick={()=> removeTask(index)}>delete</button>
    <button className="move" onClick={()=> moveTaskUp(index)}>👆</button>
    <button className="move" onClick={()=> moveTaskDown(index)}>👇</button>
    </li>)}
  </ol>  
  
  </>)
}


export default Todolist