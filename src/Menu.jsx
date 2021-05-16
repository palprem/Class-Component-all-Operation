import React from 'react';
import {Link} from 'react-router-dom';
import IMAGES from './Img/index';


class Menu extends React.Component{
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <img className="rounded-circle img-fluid" src={IMAGES.logo} alt="" />
                <Link className="navbar-brand nav-link text-white" to='/'>Home</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to='/state' >State</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/book' >Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/api' >Api</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/0/hooks5' >Hooks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/contect' >Contect</Link>
                        </li>
                        <li className="nav-item" href="javascript:void(0);" onClick={logout}>
                            <Link className="nav-link text-white" > Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </>
        )
    }
}

const logout=()=>{
    sessionStorage.clear();
    window.location.reload();
}
export default Menu;