// import React from 'react'
// import {useState} from "react";

// const App = () => {
  
//   const [a,setA]=useState(0);
//  function valueChange(){
//   setA(30);
//  }
  

//   return (
//     <div>
//       <h1> value of  a is {a}</h1>
//       <button onClick={valueChange}>Click</button>
//     </div>
//   )
// }

// export default App
//  import React, { useState } from 'react'
 
//  const App = () => {
//   const[num ,setNum]=useState(0);
// function increase(){
//   setNum(num+1);
// }
// function decrease(){
//   setNum(num-1);
// }
//    return (
//      <div>
//       <h1>{num}</h1>
//        <button onClick={increase}>Increase</button>
//        <button onClick={decrease}>Decrease</button>
//      </div>
//    )
//  }
 
//  export default App
import React, { useState } from 'react'

const App = () => {
  
  const[num ,setNum]=useState({name:"Prajwal",age:22});
  console.log(num);
  const btnClick=()=>{
//     const newNum={...num};
//     newNum.name="Sejal";
// setNum(newNum);
setNum(prev=>({...prev,age:21}));
  

    //setNum({name:"Sejal",age:21});
  }
  return (
    <div>
      <h1>{num.name} {num.age}</h1>
      <button onClick={btnClick}>click</button>
    </div>
  )
}

export default App

 
