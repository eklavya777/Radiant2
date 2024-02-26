import React from 'react';
import './header.css';
import SearchIcon from './searchIcon'; // Check the correct path to SearchIcon

const Header = () => {
  return (
    <header className='header'>
      <div className="search-bar">
        <input type="text" placeholder={<SearchIcon />} className="search-input" />
      </div>
      <div className="header-links">
        <a href="#categories">Categories</a>
        <a href="#website-builders">Website Builders</a>
        <a href="#todays-deals">Today's Deals</a>
      </div>
    </header>
  );
};

export default Header;
