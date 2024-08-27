import React from 'react'
import { BiSolidDonateBlood ,BiUserCircle} from "react-icons/bi";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const {user} = useSelector((state)=>state.auth);
    const navigate = useNavigate()

    // logout handler
    const handleLogout = ()=>{
        localStorage.clear()
        navigate('/login');
        alert("logout successfully");
    }

  return (
    <>
        <nav className='navbar '>
            <div className='container-fluid'>
                <div className="navbar-brand h1"><BiSolidDonateBlood color = "red" />
                    Blood Bank App
                </div>
                <ul className="navbar-nav flex-row">
                    <li className="nav-item mx-3">
                        <p className="nav-link">
                            <BiUserCircle></BiUserCircle>
                            Welcome{user?.name || user?.hospitalName || user?.organisationName}
                        </p>

                    </li>
                   <li className='nav-items flex-row'>
                    <button className = "btn btn-danger" onClick = {handleLogout}>Logout</button>

                   </li>
                </ul>
            </div>
        </nav>

    </>
  )
}

export default Header
