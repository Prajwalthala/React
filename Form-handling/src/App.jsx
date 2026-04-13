import React from 'react'

const App = () => {
   const onSubmit=(e)=>{
      e.preventDefault();
      console.log("submitted")
    }
  return (
   
    <div>
      <form action="" onSubmit={(e)=>{
        onSubmit(e)
      }} defaultPrevent>
        <input placeholder="Enter your name" type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

