import { Outlet, NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className='Navbar'>
        <ul className="nav_list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/companies">Companies</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li>
            {localStorage.getItem('username')?<NavLink to={`/profile/${localStorage.getItem('username')}`}>Profile</NavLink>:null}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;