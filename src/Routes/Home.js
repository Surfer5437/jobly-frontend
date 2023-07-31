
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";

function Home() {
    function logout(){
        localStorage.clear()
        window.location.reload(false);
    }
return (
    <>
    {localStorage.getItem('username')?<Welcome />:<><Login /><button ><NavLink style={{ textDecoration: 'none' }} to="/register">Register</NavLink></button></>}
    {localStorage.getItem('username')?<button onClick={logout}>Logout</button>:null}
    </>
)
}

export default Home;