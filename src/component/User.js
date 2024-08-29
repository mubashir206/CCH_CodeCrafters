import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const handleDelete = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/user/delete/${userId}`);
            if (response.status === 200) {
                // Handle success, e.g., show a success message or update UI
                // Filter out the user with the given ID
                const updatedUsers = users.filter(user => user.id !== userId);
                // Set the state with the updated user list
                setUsers(updatedUsers);
                console.log('User deleted successfully');
            }
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Error deleting user:', error.message);
        }
    };


    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-11 offset-1 border border-success p-4 my-3 '>
                    <h2 className='text-center'>User Table</h2><hr></hr><hr></hr>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>CNIC</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.cnic}</td>
                                    <td>{user.phone}</td>
                                    <td>

                                        <button type="button" className="btn btn-danger m-1" onClick={() => handleDelete(user.id)}>Delete</button>

                                        <button type="button" className="btn btn-info"><Link to={`/update/${user.id}`}>Update</Link></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
