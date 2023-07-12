import '../css/types.css';
import { Link } from 'react-router-dom';
import Top from './top';
import health from '../assets/health.png';
import device from '../assets/device.png';
import life from '../assets/life.png';
import car from '../assets/car.png';
import old from '../assets/old.png'
import members from '../assets/members.png';
import passenger from '../assets/passenger.png';
import house from '../assets/house.png'
import step from '../assets/step.png'
import advantage from '../assets/advantage.png'
const Types = () =>
{
    
    const icon ={
        height: '80px',
        width: '80px',
        marginTop: '10px',
    };
    
    const text = 
    {
        
    };
    return(
        <div>
        <Top/>
        <div className='out'>
           
            <center>
            <div style={{display:'flex',flexWrap: 'wrap',marginLeft:'75px'}}>
             
             <div class="container1"  >
                <Link to='/'>
                <div class="card" style={{ backgroundcolor: 'red',}}>
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={health} alt='health' style={icon} />
                                <h3 style={text}>Health Insurance</h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                         <div class="content">
                            <h3  className='text'> 25% OFF</h3>
                            <p  className='text'>covers medical expenses that arise due to an illness.</p>
                         </div>
                    </div>
                </div>
                </Link>
            </div>


            <div class="container1">
                <Link to='/'>
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={car} alt='car'  style={icon}/>
                                 <h3>Vehicle Insurance</h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                         <div class="content">
                            <h3  className='text'> 30% OFF</h3>
                            <p  className='text'>Protection for your vehicle against unexpected events..</p>
                         </div>
                    </div>
                </div>
                </Link>
            </div>

            <div class="container1" style={{display:'flex'}}>
            <Link to='/'>
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={life} alt='life'  style={icon}/>
                                 <h3 style={text}>Life Insurance</h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                         <div class="content">
                            <h3> 20% OFF</h3>
                            <p> covers and providing a death benefit</p>
                         </div>
                    </div>
                </div>
                </Link>
            </div>
            
           <div>


           </div>
           <div class="container1">
           <Link to='/'>
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={device} alt='device'  style={icon}/>
                                 <h3 style={text}>Gadget Insurance</h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                         <div class="content">
                            <h3> 35% OFF</h3>
                            <p>Coverage for your valuable electronic devices.</p>
                         </div>
                    </div>
                </div>
                </Link>
            </div>

            <div class="container1">
            <Link to='/'>
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                            <img src={house} alt='house'  style={icon}/>
                                 <h3 style={text}> Property Insurance</h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                         <div class="content">
                            <h3> Hello there!</h3>
                            <p>Insurance for safeguarding your real estate assets.</p>
                         </div>
                    </div>
                </div>
                </Link>
            </div>

            <div class="container1">
            <Link to='/'>
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                            <img src={passenger} alt='passenger'  style={icon}/>
                                 <h3 style={text}> Travel Insurance</h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                         <div class="content">
                            <h3> 15% OFF</h3>
                            <p>Peace of mind for worry-free travel experiences.</p>
                         </div>
                    </div>
                </div>
                </Link>
            </div>

            <div class="container1">
            <Link to='/'>
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                            <img src={old} alt='old'  style={icon}/>
                                 <h3 style={text}> Retirement Plans</h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                         <div class="content">
                            <h3>25% OFF</h3>
                            <p>Investment plan for secure retirement income.</p>
                         </div>
                    </div>
                </div>
                </Link>
            </div>

            <div class="container1">
            <Link to='/'>
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                            <img src={members} alt='mmbers'  style={icon}/>
                                 <h3 style={text}> Family Health Insurance</h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                         <div class="content">
                            <h3> 50% OFF</h3>
                            <p>Comprehensive healthcare coverage for your entire family.</p>
                         </div>
                    </div>
                </div>
                </Link>
            </div>
           </div>
           </center>
           
        </div>
        <div>
        <img src={step} alt='step' style={{marginLeft:'50px',}}/>
        </div>
        <div>
        <img src={advantage} alt='step' style={{marginLeft:'50px',}}/>
        </div>
        </div>
    );
}
export default Types;