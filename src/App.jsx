import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "26 de Agosto de 2024",
      isCompleted: true,
    }, 
    {
      id: 2,
      title: "Estudar Inglês",
      description: "16 de Maio de 2024",
      isCompleted: false,
    }, 
    {
      id: 3,
      title: "Dar feliz ano novo",
      description: "01 de Janeiro de 2025",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId){
    const newTasks = tasks.map(task =>{
      if (task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      } else{
        return task
      }
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask); 

  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        {/* agora irei renderizar meu componente que acabei de criar */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App