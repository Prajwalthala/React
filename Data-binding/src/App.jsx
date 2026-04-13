import React, { useState } from 'react'

const App = () => {
   const onSubmit=(e)=>{
      e.preventDefault();
      console.log("form submitted by", title);
      setTitle('');
    }
    const[title,setTitle]=useState("");
  return (
   
    <div> 
      <form action="" onSubmit={(e)=>{
        onSubmit(e)
      }} >
        <input  value={title} placeholder="Enter your name" type="text"  onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
