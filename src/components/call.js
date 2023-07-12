import React, { useState } from 'react';
import '../css/call.css';
import chat from '../assets/chat.png'
import mic from '../assets/mic.png'
import conselling from '../assets/conselling.png';
import video from '../assets/video.png'
const Call = () => 

{
  const logo = 
  {
    width: '100x',
    height : '100px',
    marginleft: '30000x',
    margintop:'200px',
  };
  const detail =
  {
    margintop: '0px',
  };
    return(
      <div className='he'>
            <div class="container2">  
            <img src ={conselling} style={logo}/>

           <h3>Anytime, Anywhere, Any device.</h3> 
                <div class="col3 col-md-7">
                    <h5 class="users-detail-title" style={detail}>Details </h5>
                    <div class="user-details-form">
                      <form action="/action_page.php">
    <div class="col-sm-5">
    <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." required/></div>
    
    <div class="col-sm-5">
    <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/></div>
    
    
    <div class="col-sm-5">
    <label for="fname">Email</label>
      <input type="email" id="email" name="email" placeholder="Email Address" required/></div>
    
    <div class="col-sm-5">
    <label for="fname">Phone Number</label>
      <input type="tel" id="pnumber" name="pnumber" placeholder="Phone number.." required/></div>
    
    <div class="col-sm-2">
    <label for="fname">Issue</label>
      <input type="text" id="ext" name="ext" placeholder="Issues.."/></div>
    
      <div>
        Session type<br></br><br></br>
      <input type="radio" id="video" name="fav_language" value="Video" required/>
 <label for="video">Video Session</label>
 <input type="radio" id="call" name="fav_language" value="call"/>
 <label for="call">Voice Session</label>
 <input type="radio" id="message" name="fav_language" value="message"/>
 <label for="message">Message Session</label>
      </div>
    <br></br>
    <div class="col-sm-12">
    <label for="country">Place</label>
    <select id="country" name="country" placeholder="Please Select a Country" required>
      <option value="" disabled selected><span class="user-details-country-placeholder">Please Select a Country</span></option>
      <option value="australia">Australia</option>
      <option value="usa">India</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      </select></div>
  
    <input type="submit" value="Submit"/>
                      </form>
                  </div>
              </div>
            </div>
            </div>
    );
}
export default Call;