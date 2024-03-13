import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <div className="registration-form-container">
        <div className="registration-form">
          <h1>Registration Form</h1>
          <div className="personal-details">
            <h2>Personal Details</h2>
            <div className="row">
              <div className="col">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder='enter number' />
              </div>
              <div className="col">
                <label htmlFor="fatherName">Father's Name</label>
                <input type="text" id="fatherName" name="fatherName" placeholder='enter number' />
              </div>
              <div className="col">
                <label htmlFor="motherName">Mother's Name</label>
                <input type="text" id="motherName" name="motherName" placeholder='enter number' />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="dob">Date of Birth</label>
                <input type="text" id="dob" name="dob" placeholder='enter adhar number' />
              </div>
              <div className="col">
                <label htmlFor="email">FullName</label>
                <input type="email" id="email" name="email" placeholder='enter adhar number' />
              </div>
              <div className="col">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder='enter adhar number ' />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="dob">Mobile</label>
                <input type="text" id="dob" name="dob" placeholder='enter adhar number' />
              </div>
              <div className="col">
                <label htmlFor="email">Gender</label>
                <input type="email" id="email" name="email" placeholder='enter adhar number' />
              </div>
              <div className="col">
                <label htmlFor="email">address</label>
                <input type="email" id="email" name="email" placeholder='enter adhar number ' />
              </div>
            </div>

            <div>
              <h2>Other Details</h2>
              <div className="row">
                <div className="col">
                  <label htmlFor="dob">Stream</label>
                  <input type="text" id="dob" name="dob" placeholder='enter adhar number' />
                </div>
                <div className="col">
                  <label htmlFor="email">Previous class</label>
                  <input type="email" id="email" name="email" placeholder='enter adhar number' />
                </div>
                <div className="col">
                  <label htmlFor="email">Hobbies</label>
                  <input type="email" id="email" name="email" placeholder='enter adhar number ' />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="dob">Account</label>
                  <input type="text" id="dob" name="dob" placeholder='enter adhar number' />
                </div>
                <div className="col">
                  <label htmlFor="email">Religion</label>
                  <input type="email" id="email" name="email" placeholder='enter adhar number' />
                </div>
                <div className="col">
                  <label htmlFor="email">catagoery</label>
                  <input type="email" id="email" name="email" placeholder='enter adhar number ' />
                </div>
              </div>
            </div>

          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
