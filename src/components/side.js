import { Link } from "react-router-dom";


const Side = () => {
    const sideCon = {
        //backgroundColor: 'black',
    };
  const sideBar = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    backgroundColor: 'white',
    width: "200px",
    
    height: "100vh",
  };

  const linkStyle = {
    display: "block",
    padding: "16px",
    textDecoration: "none",
    color: "#774f9a",
  };

  return (
    <div style={sideCon}>
      <ul style={sideBar}>
        <li>
          <Link to="./" style={linkStyle}>
           Health
          </Link>
        </li>
        <li>
          <Link to="./" style={linkStyle}>
            Life
          </Link>
        </li>
        <li>
          <Link to="./" style={linkStyle}>
            Vehicle
          </Link>
        </li>
        <li>
          <Link to="./" style={linkStyle}> Property
          </Link>
        </li>
        <li>
          <Link to="./" style={linkStyle}>
            Gadget
          </Link>
        </li>
        <li>
          <Link to="./" style={linkStyle}>
            Settings
          </Link>
        </li>
        <br />
        <br />
        <li>
          <Link to="./signup" style={linkStyle}>
            Logout
          </Link>
        </li>
      </ul>
    
    </div>
  );
};

export default Side;
