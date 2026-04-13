import React from 'react'

const card = (props) => {
  console.log(props);
  return (
    
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1665311515452-a9f54c4266c9?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      <h1>{props.user}</h1>
      <h2>AGE:{props.age}</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veritatis in perspiciatis, ducimus facere soluta nobis eaque impedit qui quas, voluptatibus blanditiis accusantium saepe aspernatur, obcaecati dolor. Similique, possimus et!</p>
      <button>View Profile</button>
    </div>
    
  )
}

export default card
