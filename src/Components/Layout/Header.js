import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='logo'>Logo</div>
      <nav>
        <a href='#'>create ads</a>
        <a href='#'>About Us</a>
        <a href='#'>Log in</a>
        <a href='#' className='register-btn'>
          Register
        </a>
      </nav>
    </header>
  );
};

export default Header;
