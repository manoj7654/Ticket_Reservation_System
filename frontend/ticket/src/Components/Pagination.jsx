import React from 'react'
import "./pagination.css"
const Pagination = ({page,handleChange,data}) => {
  return (
    <div className='btn' >
        <button className='page' disabled={page==1} onClick={()=>handleChange(-1)}>PREV</button>
      <button className='dis' >{page}</button>
      <button className='page' onClick={()=>handleChange(1)}>NEXT</button>
    </div>
  )
}

export default Pagination