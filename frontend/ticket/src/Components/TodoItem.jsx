import React from 'react'

const TodoItem = ({_id,title,description,status,handleToggle,handleDelete}) => {
  return (
          <tr key={_id}>
            <td>{title}</td>
            <td>{description}</td>
            <td><button onClick={()=>handleToggle(_id)} className="toggle">{status? "Completed":"Not Completed"}</button></td>
            <td>
              <button onClick={()=>handleDelete(_id)} className="del">Delete</button>
            </td>
           
          </tr>
  
  )
}

export default TodoItem