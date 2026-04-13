import React from 'react'
import Card from "./card.jsx"
import User from "./user.jsx"

const App = () => {
  const jobOpenings=  [
  {
    brandlogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 weeks ago",
    post: "Frontend Developer",
    tags: "Full Time",
    tag2: "Junior Level",
    pay: "$8500/month",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tags: "Full Time",
    tag2: "Senior Level",
    pay: "$12000/month",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tags: "Full Time",
    tag2: "Mid Level",
    pay: "$9500/month",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tags: "Full Time",
    tag2: "Junior Level",
    pay: "$9000/month",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tags: "Full Time",
    tag2: "Senior Level",
    pay: "$14000/month",
    location: "Pune, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "6 weeks ago",
    post: "Cloud Engineer",
    tags: "Full Time",
    tag2: "Mid Level",
    pay: "$11000/month",
    location: "Noida, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "2 weeks ago",
    post: "UI/UX Developer",
    tags: "Part Time",
    tag2: "Junior Level",
    pay: "$7000/month",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "7 weeks ago",
    post: "Embedded Systems Engineer",
    tags: "Full Time",
    tag2: "Senior Level",
    pay: "$13000/month",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "10 weeks ago",
    post: "Data Engineer",
    tags: "Full Time",
    tag2: "Mid Level",
    pay: "$10500/month",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/linkedin.com",
    company: "LinkedIn",
    datePosted: "8 weeks ago",
    post: "Machine Learning Engineer",
    tags: "Full Time",
    tag2: "Senior Level",
    pay: "$15000/month",
    location: "Hyderabad, India"
  }
];

  return(
   <div className="parent">
{jobOpenings.map(function(elem){
  return <Card company={elem.company} post={elem.post} tags={elem.tags} tag2={elem.tag2}/>;
})

}
   </div>
 
  )
}

export default App

