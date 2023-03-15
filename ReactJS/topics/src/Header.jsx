import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
          {/* <a href="/">Home</a>  
          <a href="/about">About</a>  
          <a href="/contact">Contact</a>   */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </>
    );
};

export default Header;