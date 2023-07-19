import React from 'react';
import { Link } from 'react-router-dom';
import car from '../assets/car.png';
import 'react-slideshow-image/dist/styles.css';
import device from '../assets/device.png';
import health from '../assets/health.png';
import life from '../assets/life.png';
import '../css/insurance.css';
const Insurance = () =>
{
 
  const small =
  { 
    width: '20px',
    height: '20px',
    marginRight: '10px',
  };
  const mainContentStyle = {
    marginLeft: '220px',
    padding: '20px',
  };

  const slideshowContainerStyle = {
    marginTop: '70px',
    marginLeft: '220px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };


  const navStyle = {
    backgroundColor: 'white',
    color: '#774f9a',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  
  const icon ={
      height: '100px',
      width: '100px',
  };

  const linkStyle = {
    color: '#774f9a',
    textDecoration: 'none',
    margin: '0 30px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };



  const logoStyle = 
  {
    width: '70px',
    height: '50px',
    marginBottom : '0px',
  };
  const profileStyle = 
  {
    width: '35px',
    height: '30px',
    paddingTop : '10px',
    boxSizing: 'content-box',
  };
    return(
        <div>
            <div class="row">


    <Link to='/health'>          
  <div class="column">
    <div class="card">
      <img src={health} alt='health' style={icon} />
      <h3>Health Insurance</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  </Link>

<Link to ='/vehicle'>
  <div class="column">
    <div class="card">
    <img src={car} alt='car'  style={icon}/>
      <h3>Vehicle Insurance</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  </Link>
  
  <Link to ='/life'>
  <div class="column">
    <div class="card">
    <img src={life} alt='life'  style={icon}/>
      <h3>Life Insurance</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  </Link>

  <Link to ='/gadget'>
  <div class="column">
    <div class="card">
    <img src={device} alt='device'  style={icon}/>
      <h3>Gadget Insurance</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  </Link>
  
</div>
        </div>
    );
}
export default Insurance