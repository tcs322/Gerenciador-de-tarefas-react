import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function seeDetails(task) {
    navigate(`/description?id=${task.id}`);
  }

  return (
    <ul className="space-y-3 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.changeTaskIsCompleted(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => seeDetails(task)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            Detalhes
          </button>
          <button
            onClick={() => props.deleteTask(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            Excluir tarefa
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
