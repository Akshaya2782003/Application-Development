import React from 'react';
import { Link } from 'react-router-dom';
import car from '../assets/car.png';
import logo from '../assets/icon.png';
import Start from './start';
import '../css/nav.css';
import { useRef } from 'react';
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import device from '../assets/device.png';
import health from '../assets/health.png';
import life from '../assets/life.png';
import profile from '../assets/profile.jpg';
import home from '../assets/home.png';



import phone from '../assets/phone.png';
import compare from '../assets/compare.png';
import info from '../assets/info.png';
const Nav = () => 
{

  const slideshowRef = useRef(null);

  const handleSlideChange = () => {
    if (slideshowRef.current) {
      slideshowRef.current.goNext();  
    }
  };
  const sidebarStyle = {
    backgroundColor: 'grey',
    padding: '20px',
    width: '200px',
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
  };

  const sidebarLinkStyle = {
    display: 'block',
    margin: '25px ',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };
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

  const slideImages = [
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689050870/gppnraeyghm1gfn5gjvk.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051267/laaih9qtlpje4qzatgsi.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051504/jk6vuxdnnaqgusuiiycy.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051718/niuveaewbkqjsub2kn7u.png',
  ];

  const slideProperties = {
    duration: 3000, 
    height: '100px',
    transitionDuration: 300, // Transition duration between slides in milliseconds
    infinite: true, // Whether to loop the slideshow continuously
    indicators: true, // Whether to show slide indicators at the bottom
    arrows: true, // Whether to show previous/next arrows
    autoplay: true, // Whether to automatically transition to the next slide
    pauseOnHover: true, // Whether to pause the slideshow on hover
    canSwipe: true, // Whether to allow swiping on touch-enabled devices
  };

  const slideContainerStyle = {
    marginRight: '300px',
    borderRadius: '15px',
    borderstyle : 'solid',
    height: '1000px', // Adjust the height as needed
    width: '800px', // Adjust the width as needed
   // Center the slideshow horizontally
  };

  const slideImageStyle = {
    height: '100%', // Make the images fill the slide container vertically
    width: '100%', // Make the images fill the slide container horizontally
    objectFit: 'cover', // Scale and crop the images to fit the container
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



  const logoStyle = {
    width: '70px',
    height: '50px',
    marginBottom : '0px',
  };
  const profileStyle = {
    width: '35px',
    height: '30px',
    paddingTop : '10px',
    boxSizing: 'content-box',
  };


  return (
    <div>
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/home" style={linkStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </Link>
        <div>
        <Link to="/Home" style={linkStyle}>
          <img src={home} alt="Logo" style={small} />
            Home
          </Link>
          <Link to="/types" style={linkStyle}>
          <img src={life} alt="Logo" style={small} />
            Insurances
          </Link>
          <Link to="/top" style={linkStyle}>
          <img src={compare} alt="Logo" style={small} />
            Compare
          </Link>
          <Link to="/types" style={linkStyle}>
          <img src={info} alt="Logo" style={small} />
            About
          </Link>
          <Link to="/call" style={linkStyle}>
          <img src={phone} alt="Logo" style={small} />
            Contact
          </Link>
          <Link to="/home" style={linkStyle}>
          <img src={profile} alt="profile" style={profileStyle} />
        </Link>
        </div>
      </div>
    </nav>
    <Start/>

    <div style={slideshowContainerStyle}>
        <br></br>
        <br></br>
        
        <div style={slideContainerStyle}>
          <Slide {...slideProperties} ref={slideshowRef}>
            {slideImages.map((image, index) => (
              <div key={index} className="each-slide">
                <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
              </div>
            ))}
          </Slide>
        </div>
      </div>

    <div class="row">
  <div class="column">
    <div class="card">
      <img src={health} alt='health' style={icon} />
      <h3>Health Insurance</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={car} alt='car'  style={icon}/>
      <h3>Vehicle Insurance</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src={life} alt='life'  style={icon}/>
      <h3>Life Insurance</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src={device} alt='device'  style={icon}/>
      <h3>Gadget Insurance</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>

     


    </div>
  );
};

export default Nav;