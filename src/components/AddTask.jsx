import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-3 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="bg-white border-slate-400 outline-slate-700 px-2 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="bg-white border-slate-400 outline-slate-700 px-2 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa");
          }
          props.addTaskSubmit(title, description),
            setTitle(""),
            setDescription("");
        }}
        className="bg-green-800 p-2 text-white rounded-md"
      >
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTask;
