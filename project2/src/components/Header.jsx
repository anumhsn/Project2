import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                 <Link to="/">jobs.io</Link>
                 <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Header;