import {  useState } from "react";
import './Register.css';
import JoblyApi from "./api";

function  Register () {
    const initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    };
   const [formData, setFormData] = useState(initialState);
    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

   async function  handleSubmit (e) {
        e.preventDefault();
            await JoblyApi.postUser(formData).then((result)=>{
               
                localStorage.setItem('token',result.token)
            }) 
        setFormData(initialState);
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                id="username"
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange} />
                <label htmlFor="firstName">First Name:</label>
                <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="firstName"
                value={formData.firstName}
                onChange={handleChange} />
                <label htmlFor="lastName">Last Name:</label>
                <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="lastName"
                value={formData.lastName}
                onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register;
