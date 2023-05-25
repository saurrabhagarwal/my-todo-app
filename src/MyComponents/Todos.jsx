import React from 'react'
import TodoItem from './TodoItem'

export default function Todos({todos,onDelete}) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
}
return (
    <div className="container" style={myStyle}>
        <h3 className="my-3">Todos List</h3>
        {todos.length===0? "No Todos to display":  
        todos.map((todo)=>{ //higher order function
            return (<TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>   
            )
        })
          } 
    </div>
)
}
