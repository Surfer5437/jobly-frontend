import { useEffect, useState } from "react";
import JoblyApi from "./api";

function  Profile () {
    const initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        isAdmin: ""
    };

   const [formData, setFormData] = useState(initialState);
    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    useEffect(function profileLoad() {
        JoblyApi.getCurrentUser(localStorage.getItem('username')).then((result)=>{
            setFormData(result.user)
        }) 
    },[])

   async function  handleSubmit (e) {
        e.preventDefault();
            await JoblyApi.postUser(formData).then((result)=>{
                localStorage.setItem('token',result.token)
            }) 
        setFormData(initialState);
    }

    return (
        <div className="container">
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                id="username"
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
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
                <p>Is Admin: {String(formData.isAdmin)}</p>
                <button>Submit</button>
            </form>
        
        </div>
    )
}
export default Profile;