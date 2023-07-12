import family from '../assets/family.jpg';
import insure from '../assets/insure.png';
const Start = () =>
{
    
    const image =
    {
        marginTop: '10px',
        width: '100%',
        height: '500px',
    };
    const agent=
    {
        height:'250px',
        width: '250px',
    }
    const button =
    {
        padding: '10px',
    fontSize: '16px',
    backgroundColor: 'black',
    borderRadius: '5px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    };
    const text = 
    {
        position: 'absolute',
        top: '40%',
        left: '20%',
        border: '20px',
        borderstyle:'dotted',
        transform: 'translate(-50%, -50%)',
    };
    return(
        <div>
            <img src={family} style={image} alt ="bg"/>
            <div style={text} >

                <center>
                <br>
                </br>
                <br>
                </br>
                <h1>Protect the ones you love the most</h1>
                <img src={insure} style={agent}/>
                <p >Your Journey our Care!!</p>
                <h3>Let's find you the Best Insurance</h3>
                <button style={button}>Get your Insurance</button>
                </center>
            </div>
        </div>
    );
}
export default Start;