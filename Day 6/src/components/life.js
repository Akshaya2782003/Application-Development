import React, { useState } from 'react';
import '../css/life.css'
import apply from '../assets/apply.png'
import { Link } from 'react-router-dom';
const Life = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    age: '',
    gender: '',
    policyProvider: '',
    annualIncome: '',
    occupation: '',
    education: '',
    propertyDocuments: null,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const image =
  {
    width: '300px',
    marginTop :'80%',
    marginLeft: '10%',
    height :'250px',
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      propertyDocuments: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    
    // Set the submitted data
    setSubmittedData(formData);
  };

  return (
    <div>
      
      <div style={{display:'flex'}}>
      <div style={{position:'fixed'}}>
        <img src={apply} alt={apply} style={image}/>
      </div>
          <div className="form-container">
           <center><h1>Life Insurance Application</h1></center>
             <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"  style={{height:'45px',width:'350px'}}  value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input type="number" id="mobile" name="mobile" style={{height:'45px',width:'350px'}}  value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" style={{height:'45px',width:'350px'}} value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} style={{height:'45px',width:'350px'}} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="policyProvider">Policy Holder:</label>
          <select id="policyProvider" name="policyProvider" style={{height:'45px',width:'350px'}} value={formData.policyProvider} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Self">Self</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Spouse">Spouse</option>
            <option value="Daughter">Daughter</option>
            <option value="Son">Son</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="annualIncome">Annual Income:</label>
          <input type="number" id="annualIncome" name="annualIncome" style={{height:'45px',width:'350px'}} value={formData.annualIncome} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" name="occupation" style={{height:'45px',width:'350px'}}  value={formData.occupation} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <input type="text" id="education" name="education"style={{height:'45px',width:'350px'}} value={formData.education} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="Photo">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Pan Card">Pan Card:</label>
            <input
              type="file"
              id="panCard"
              name="panCard"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address Proof">Address Proof:</label>
            <input
              type="file"
              id="addressProof"
              name="addressProof"
              onChange={handleFileChange}
              required
            />
          </div>
        <div className="form-group">
          <button type="submit" style={{marginLeft:'25%'}}>Submit</button>
        </div>
              </form>
          </div>
            <div style={{marginLeft:'10%',marginTop:'5%'}}>
          
      {submittedData && (
        <div>
            <h2>Summary:</h2>
          <center><p style={{textDecoration:'underline',fontWeight:'bold'}}>Personal Details</p></center>
          <p>Name: {submittedData.name}</p>
          <p>Mobile: {submittedData.mobile}</p>
          <p>Age: {submittedData.age}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Policy Holder: {submittedData.policyProvider}</p>
          <p>Annual Income: {submittedData.annualIncome}</p>
          <p>Occupation: {submittedData.occupation}</p>
          <p>Education: {submittedData.education}</p>
          <center><p style={{textDecoration:'underline',fontWeight:'bold'}}>Policy Details</p></center>
    
          <p>Policy Provider : Max</p>
          <p>Policy Name : Jeevan</p>
          <p>Policy Type : Term Life Insurance</p>
          <p>Coverage Amount : ₹100,000</p>
          <p>Policy Term : 10 years</p>
          <p>Amount Per Month : ₹500/month</p>
          <p>Premium : Gold</p>
          <center>
            <Link to='/layout'><button style={{marginTop:'50px'}}>BUY POLICY</button></Link>
          </center>
        </div>
      )}
            </div>
        </div>
    </div>
  );
};

export default Life;