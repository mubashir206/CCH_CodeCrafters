import React from 'react'

export default function Register() {
    return (
        <div>
            <div className='container' style={{margin:"80px"}}>
                <div className='row'>
                    <div className="col-md-6 offset-3 border border-success p-4 ">

                        <h1>Register</h1><hr></hr>
                        <form id="createUserForm" action="http://localhost:5000/create" method="POST">
                    {/* <!-- Name --> */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control my-3" name='name' id="name" placeholder="Enter your name" required/>
                    </div>

                    {/* <!-- Address --> */}
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control my-3" name="address" id="address" placeholder="Enter your address" required/>
                    </div>

                    {/* <!-- Email --> */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control my-3" id="email" name="email" placeholder="Enter your email" required/>
                    </div>

                    {/* <!-- Password --> */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control my-3" id="password" name="password" placeholder="Enter your password" required/>
                    </div>

                    {/* <!-- CNIC --> */}
                    <div className="form-group">
                        <label htmlFor="cnic">CNIC</label>
                        <input type="text" className="form-control my-3" id="cnic" name="cnic" placeholder="Enter your CNIC" required/>
                    </div>

                   
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" className="form-control my-3" id="phone" name="phone" placeholder="Enter your phone number" required/>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button type="submit" className="btn btn-primary mb-1">Register</button>
                </form>
                    </div>
                </div>
            </div>


        </div>
    )
}
