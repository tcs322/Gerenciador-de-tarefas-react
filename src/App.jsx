import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      title: "Estudar React",
      description: "blá blá blá",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Estudar GraphQL",
      description: "blá blá blá",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Projetar esqueleto do sistema de Ecommerce",
      description: "blá blá blá",
      isCompleted: false,
    },
  ]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      setTasks(data);
    }

    fetchTasks();
  }, []);

  function changeTaskIsCompleted(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function addTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="min-w-screen min-h-screen bg-gray-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-white text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask addTaskSubmit={addTaskSubmit} />
        <Tasks
          tasks={tasks}
          changeTaskIsCompleted={changeTaskIsCompleted}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
