import React from "react";
import './Navigation.css'
import {MdKeyboardArrowDown} from 'react-icons/md';
import {FiSearch} from 'react-icons/fi';

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <div className='semi-navigation'>
    <div className='semi-nav-elem semi-nav-elem-1'>
    <span className='semi-nav-elem-1-item'>Browse Categories<MdKeyboardArrowDown size='22px' color="#01B2EE"/></span>
    <span className='semi-nav-elem-1-item'>What's New</span>
    <span className='semi-nav-elem-1-item'>Trending</span>
    <span className='semi-nav-elem-1-item'>For You</span>
    <span className='semi-nav-elem-1-item'>Shop Products</span>
    </div>
    <div className='semi-nav-elem semi-nav-elem-2'>
      <div className='search-div'>
      <FiSearch size='24px'/>
      <input className='search-field'/>
      </div>
    </div>
      </div>
      </div>
  );
};

export default Navigation;
