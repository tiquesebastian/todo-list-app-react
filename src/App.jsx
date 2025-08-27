import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");

  const agregarTareas = () => {
    if (!input.trim()) return;

    setTareas([...tareas,
      { id: Date.now(), texto: input, completada: false },
    ]);
    setInput("");
  };

  console.log(tareas.map((tarea) => tarea.texto));
return (
  <div className="max-w-md mx-auto mt-10">
    <h1 className="text-3xl font-bold mb-5 text-center">MI LISTA DE TAREAS REACT</h1>
    <div className="flex gap-3 mb-4">
      <input
        className="flex-1 p-3 shadow-md rounded"
        type="text"
        value={input} // Controla el valor del input
        onChange={e => setInput(e.target.value)} // Actualiza el estado al escribir
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded"
        onClick={agregarTareas} // Llama a la función al hacer click
      >
        agregar tarea
      </button>
    </div>
    <div>
      {/* Aquí irán las tareas, probablemente usando map */}
      {tareas.map((tarea) => (
        <TodoItem key={tarea.id} tarea={tarea.texto} toggleComplete={() => {}} />
      ))}
    </div>
  </div>
);

}
