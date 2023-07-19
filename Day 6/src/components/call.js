import React, { useState } from 'react';
import '../css/call.css';
import counselling from '../assets/counselling.png';
const Call = () => 
{

 
  const logo = 
  {
    width: '200x',
    height : '200px',
    marginleft: '10%',
  };
  const detail =
  {
    margintop: '0px',
  };
    return(
      <div style={{display:'flex'}}>
        
        <div class="container2">  
        <div style={{display:'block'}}>
        <div>
          <h1>Anytime, Anywhere, Any device.</h1> 
          <center>
          <h1>We're here!! Let's Talk</h1>
          </center>
          <h3>Get your free Advice about the Insurance that suits you</h3>
          </div >
          <div className='conselling'>
          <img src ={counselling} style={logo}/>
          </div>
          </div>
          
        </div>


          <div class="user-details-form">
            <div class="col3 col-md-7">
              <h1 class="users-detail-title" style={detail}> Details </h1>
            </div>
            <form action="/action_page.php" >
                  <div class="col-sm-5">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname"  name="firstname" placeholder="Your name.." required/>
                  </div>
                  <div class="col-sm-5">
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname"  placeholder="Your last name.." required/>
                  </div>
                  <div class="col-sm-5">
                      <label for="fname">Email</label>
                      <input type="email" id="email" name="email"  placeholder="Email Address" required/>
                  </div>
                  <div class="col-sm-5">
                    <label for="fname">Phone Number</label>
                    <input type="tel" id="pnumber" name="pnumber" placeholder="Phone number.." required/>
                  </div>
                  <div>
                    <label for="birthdaytime">Schedule Meeting (date and time):</label>
                    <br></br>
                      <input type="datetime-local" id="birthdaytime" name="birthdaytime"/>
                  </div>
                  <div class="col-sm-2">
                    <label for="fname">Issue</label>
                    <input type="text" id="ext" name="ext"  placeholder="Issues.." required/>
                  </div>
    
                  <p>Session type</p>
                  <br>
                  </br>
               <div style={{display:'flex'}}>
       
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
             <input type="submit"  value="CREATE SESSION" style={{fontWeight:'bold'}}/>
            </form>
          </div>
      </div>
    );
}
export default Call;