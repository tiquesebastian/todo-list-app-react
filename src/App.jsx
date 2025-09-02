import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");

  const agregarTareas = () => {
    if (!input.trim()) ;

    setTareas([
      ...tareas,
      { id: Date.now(), texto: input, completada: false },
    ])
    setInput("")
  }

  // Función para alternar completada o no
  const toggleComplete = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
};
    const eliminarTarea =(id) => (setTareas(tareas.filter((tarea) => tarea.id !== id)))
    console.log(tareas.map((tarea) => tarea.texto))

    const editarTarea = (id) => {
    const tareaAEditar = tareas.find((t) => t.id === id);
    if (tareaAEditar) {
    setInput(tareaAEditar.texto); // Pone el texto en el input
    setTareas(tareas.filter((t) => t.id !== id)); // Quita la tarea para volverla a agregar
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 ">
      <h1 className="text-3xl font-bold mb-5 text-center">MI LISTA DE TAREAS REACT</h1>
      <div className="flex gap-3 mb-4">
        <input
          placeholder="Escribe una tarea"
          className="flex-1 p-3 shadow-md rounded"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded"
          onClick={agregarTareas}
        >
          agregar tarea
        </button>
      </div>
      <div>
        {tareas.map((tarea) => (
          <TodoItem
            key={tarea.id}
            tarea={tarea}
            toggleComplete={toggleComplete}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
          />
        ))}
      </div>
    </div>
  );
}
