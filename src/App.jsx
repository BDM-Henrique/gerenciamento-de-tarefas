import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

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

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        {/* agora irei renderizar meu componente que acabei de criar */}
        <AddTask />
        <Tasks tasks={tasks }/>
      </div>
    </div>
  );
}

export default App