import React from 'react'
import profile from '../assets/profile.jpg'
import "../css/about.css";
function About() {
  return (
    <div>
    <div className="about-section">
  <h1>About Us</h1>
  <h2>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  </h2>

</div>

 <h2 style={{textAlign:'center'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card1">
    <img src={profile} alt="Mike" style={{width:"200px",height:"150px"}} ></img>
      <div className="container2">
        <h2>Sam</h2>
        <p className="title">Founder</p>
        
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card1">
    <img src={profile} alt="Mike" style={{width:"200px",height:"150px"}} ></img>
      <div className="container2">
        <h2 style={{display:'block'}}>Mike Ross</h2>
        <p className="title">Principal</p>
        
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card1">
    <img src={profile} alt="Mike" style={{width:"200px",height:"150px"}} ></img>
      <div className="container2">
        <h2>John Doe</h2>
        <p className="title">Chairman</p>
        
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div> 
    </div> 
  )
}

export default About