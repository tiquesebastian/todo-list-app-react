import { TrashIcon } from "@heroicons/react/16/solid";
export default function TodoItem({ tarea, toggleComplete, eliminarTarea }) {
  return (
    <div className="flex items-center justify-between gap-3 mb-2 p-3 shadow-md rounded ">
      <span className={tarea.completada ? "line-through " : "text-gray-500"}>
        {tarea.texto}
      </span>
      <input className="cursor-pointer w-5 h-5"
        type="checkbox"
        //checked={tarea.completada}
        onChange={() => toggleComplete(tarea.id)} />

    <div>
        <button onClick={() => eliminarTarea(tarea.id)}>
            <TrashIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
        </button> 
    </div>       
    </div>
  );
}
