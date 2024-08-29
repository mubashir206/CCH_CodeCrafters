import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');


  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/edit/${id}`)
      .then(res => {
        setName(res.data[0].name);
        setAddress(res.data[0].address);
        setEmail(res.data[0].email);
        setCnic(res.data[0].cnic);
        setPassword(res.data[0].password);
        setPhone(res.data[0].phone);
      })
      .catch(err => console.log(err));
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/update/" + id, { name: name, address: address, email: email, password: password, cnic: cnic, phone:phone })
      .then(res => {
        if (res.data.updated) {
          alert("Data Updated Successfully!");

        } else {
          alert("User not updated. Please try again...");
        }
      })
      .catch(error => {
        console.error('Error updating user:', error);
        alert("Failed to update user. Please try again..." + error);

      });
  };


  return (
    <div>
      <div className='container' style={{ margin: "80px" }}>
        <div className='row'>
          <div className="col-md-6 offset-3 border border-success p-4 ">

            <h1>Infomation Update</h1><hr></hr>
            <form id="createUserForm" onSubmit={submitHandler}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control my-3" name='name' value={name} id="name" placeholder="Enter your name" onChange={e => setName(e.target.value)} required />
              </div>


              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control my-3" name="address" value={address} id="address" placeholder="Enter your address" onChange={e => setAddress(e.target.value)} required />
              </div>
              {/* <!-- Email --> */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control my-3" id="email" name="email" value={email} placeholder="Enter your email" required onChange={e => setEmail(e.target.value)} />
              </div>

              {/* <!-- Password --> */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control my-3" id="password" name="password" value={password} placeholder="Enter your password" required onChange={e => setPassword(e.target.value)} />
              </div>

              {/* <!-- CNIC --> */}
              <div className="form-group">
                <label htmlFor="cnic">CNIC</label>
                <input type="text" className="form-control my-3" id="cnic" name="cnic" value={cnic} placeholder="Enter your CNIC" required onChange={e => setCnic(e.target.value)}/>
              </div>


              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" className="form-control my-3" id="phone" name="phone" value={phone} placeholder="Enter your phone number" required onChange={e => setPhone(e.target.value)}/>
              </div>


              <button type="submit" className="btn btn-primary mb-1">Register</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}
