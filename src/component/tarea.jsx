import React from 'react'

function Tarea(props) {
  return (
    <div className='divTarea'>
        <div className="divInput">
          <input type="checkbox" className='checkInput'/>
          <p>{props.tarea}</p>
        </div>
        <button onClick={() => props.eliminarTarea(props.index)} ><img src="./trash-regular-24.png" alt="" /> </button>
    </div>  
  )
}

export default Tarea