import { useState } from 'react'
import './App.css'
import Tarea from './component/tarea';

function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  function agregarTarea(){
    setTareas([...tareas, texto])
    setTexto("")
  }

  function actualizarTexto(event){
    setTexto(event.target.value)
  }

  function eliminarTarea(index){
    setTareas(tareas => {
      let nuevaTareas = [...tareas]
      nuevaTareas.splice(index, 1);
      return nuevaTareas
    })
  }
  return (
    <main>
      <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');</style>
      <div className='conAñadir'>
        <input type="text" onChange={actualizarTexto} value={texto}/>
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <div className='conTareas'>
        {tareas.map((tarea, index) => {
          return(
            <Tarea key={index} tarea={tarea} eliminarTarea={eliminarTarea} index={index}/>
          )
        })}
      </div>
    </main>
  )
}

export default App
