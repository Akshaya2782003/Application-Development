import bike from '../assets/bike.png'
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
const Car = () =>
{
    const [vehicleNumber, setNumber] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => 
    {

        e.preventDefault();
    
        if (vehicleNumber!=null) {
          navigate('/vehicle'); 
        } else {
          alert('Invalid username or password');
        }
      };
    
    return(
        <div style={{display:'flex'}}>
            
            <div style={{marginTop:'15%',marginLeft:'10%'}}>
                    <h1>No more tedious paperwork!</h1>
                    <center>
                        <h2> Insure your car and bike today.</h2>
                        <h3>Car - Bike - Commercial Vehicle Insurance</h3>
                        <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Vehicle Number'value={vehicleNumber} onChange={(e) => setNumber(e.target.value)} style={{border: '2px solid black',height:'40px',width:'300px'}} required/>
                        <br>
                        </br>
                            <button type='submit' style={{backgroundColor:'green',width:'150px',height:'50px',fontsize: '16px',borderColor:'green',border: 'none',marginTop:'30px'}}>
                                INSURE NOW</button>
                       
                        </form>
                    </center>
             </div>

            <div style={{marginLeft:'15%',marginTop:'3%'}}>
                 <img src={bike} alt="Snow" style={{width:'100%'}}/>
                 
            </div>
           
  
        </div>
    );
}
export default Car