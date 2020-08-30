import React from 'react';
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render(){

        let m = {
            float:'right',
            color:"white",
            padding:'20px',
            marginRight:'40px',
            textDecoration:'none'
        }
        let c={
            clear:'both',
            display:'table',
            width:'100%'
        }
        let d = {
            float:'left',
            marginLeft:'40px'
        }
        return(
            <nav style={c}>
                <h2 style={d}>Company Logo</h2>
                <Link style={m} to='/logout'>Logout</Link>
            </nav>
        );
    }
}

export default Navbar;