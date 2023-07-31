import { useState } from "react";
import JoblyApi from "./api";



function  Login () {
    const initialState = {
        username: "",
        password: ""
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
        try {
            await JoblyApi.loginUser(formData).then((result)=>{
                localStorage.setItem('token',result.token)
                localStorage.setItem('username', formData.username)
            }) 
        } catch (error) {
            alert(error[0])
        }
            
            if (localStorage.getItem('username')){
                setFormData(initialState);
                window.location.reload(false);
            }
    }

    return (
        <div className="container">
            <h1>Login</h1>
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
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Login;