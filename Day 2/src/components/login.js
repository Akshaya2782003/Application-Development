import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: "url('https://res.cloudinary.com/dunzdwo0h/image/upload/v1688981009/bg_qg1uwn.jpg')"

  },
  form: {
    display: 'flex',
    marginLeft: '5px', // Updated marginLeft property
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '15px',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#774f9a',
    borderRadius: '5px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    fontSize: '14px',
    textAlign: 'center',
  },
  signUpLink: {
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === 'password') {
      setError('');
      setEmail('');
      setPassword('');
      navigate('/nav'); 
    } else {
      alert('Invalid username or password');
    }
  };

  return (

    <div style={styles.container} className='con'>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Welcome !!! Happy Login</h2>
        <img  style={{marginLeft:'15px'}} alt='bg' src='https://res.cloudinary.com/dunzdwo0h/image/upload/v1688980725/icon_ysmvbu.png'/>
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        <br></br>
        <button style={styles.button} type="submit">LOGIN</button>
        <center><p style={styles.signUpLink}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        </center>
      </form>
      
    </div>
  );
};

export default Login;