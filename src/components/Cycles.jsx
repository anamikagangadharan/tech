import React, { useEffect, useState } from 'react'

const Cycles = () => {
 
   
    const[state,setState]=useState(0)

    useEffect(()=>{console.log("hello")},[])
    useEffect(()=>{console.log("updation")},[state])

  return (
    <div style={{height:"200px",background:"red"}}>
      <button onClick={()=>setState(state+1)}>{state}</button>
    </div>
  )
}

export default Cycles
