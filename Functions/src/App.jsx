// let a = document.querySelector('h1');
// a.addEventListener("click",function(){
// console.log("heading was clicked ");
// })

import React from 'react'

const App = () => {
  function btnClick(){

    console.log("Button was clicked");
  }
  return (

    <div>
      <h1>Prajwal Agrawal</h1>
      <button class="bg-yellow-500"  onClick={btnClick}>Change user </button>
      <input  placeholder="enter value"className=" flex p-4 bg-blue-200 text-black" onChange={function(elem){
        console.log(elem.target.value);
      }}type="text" />
    </div>

  )
}

export default App

