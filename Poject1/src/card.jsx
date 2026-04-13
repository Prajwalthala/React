import React from "react";
import {Bookmark} from "lucide-react"
export default function Card(props){
    console.log(props.company);
    return(
        <div>
            <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://imgs.search.brave.com/Uf6RxkMWsc8cxegmfMhies8m-x9OyytHXtBeVwqVG3M/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbWF6/b24tMTU1NjMxOTQ5/LmpwZw" alt=""></img>
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="middle">
<h3>{props.company}<span>5 day ago</span></h3>
<h2> {props.post}</h2>
<div className="tags">
  <h4>{props.tags}</h4>
  <h4>{props.tag2}</h4>
</div>
        </div>
        <div className="bottom">

  <div>
    <h3>$120/hr</h3>
    <p>Mumbai ,India</p>
  </div>
  <button>Apply Now</button>

        </div>
      </div>
    </div>
  
        </div>
    )
}