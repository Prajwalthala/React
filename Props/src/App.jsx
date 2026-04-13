import React from 'react'
import Card from "./card.jsx"
const App = () => {
  return (
    <div className="parent">
     <Card user="Prajwal Agrawal" age={19}/>
      <Card user="Sejal Agrawal" age={18}/>
        
     </div>
  )
}

export default App


