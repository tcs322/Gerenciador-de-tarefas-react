import { useSearchParams } from "react-router-dom";

function TaskDescriptionPage() {
  const [seachParams] = useSearchParams();
  const id = seachParams.get("id");

  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center p-6">
      Descrição {id}
    </div>
  );
}

export default TaskDescriptionPage;
