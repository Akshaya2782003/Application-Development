import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
   backgroundImage: "url('https://res.cloudinary.com/dunzdwo0h/image/upload/v1688981246/black_vvkhw5.jpg')"
  },
  form: {
    position : 'left',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#e6f2ff',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px'
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
  },
};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUserName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setError('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUserName('');
      alert('Signup successful!');
    } else {
      setError('Confirm Passwords mismatched with Password');
    }
  };

  return (
    <div className='con'>
    <div  style={styles.container}>
      <img  style={{marginLeft:'15px'}}src='https://res.cloudinary.com/dunzdwo0h/image/upload/v1688980725/icon_ysmvbu.png' alt='bg'/>
      <form style={styles.form} onSubmit={handleSubmit} >
        <h2><center>Sign up</center></h2>
        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
       <input type="date" name="birthday"  placeholder="DOB" style={{height: '40px',borderRadius: '5px'}} required/>
        <br></br>

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
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
         {error && <p style={styles.error}>{error}</p>}
         <br></br>
        <button style={styles.button} type="submit">SIGN UP</button>
        <center><p>Already have an account? <Link to="/">Login</Link></p></center>
      </form>
    </div>
    </div>
  );
};

export default Signup;