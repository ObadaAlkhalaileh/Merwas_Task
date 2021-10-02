import React from "react";
import './Header.css'
import nzme from './powered_by_nzme.png'

import {MdKeyboardArrowDown} from 'react-icons/md';
import {MdFavoriteBorder} from 'react-icons/md';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FiShoppingCart} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import {FiMail} from 'react-icons/fi';

const Header = () => {
  return (
    <div className="header-bar">
        <div className='semi-header'>
        <span id='grab'> GrabOne</span>
        <span className='icons'>
        <span className='icons-item'> <HiOutlineLocationMarker size="24px" color="white"/> Location <MdKeyboardArrowDown size='22px'/></span>
        <span className='icons-item'> <MdFavoriteBorder size="26px" color="white"/></span>
        <span className='icons-item'> <FiShoppingCart size="24px" color="white"/></span>
        <span className='icons-item'> <FiUser size="24px" color="white"/><MdKeyboardArrowDown size='22px'/></span>
        <span className='icons-item'> <FiMail size="24px" color="white"/>&nbsp; Subscribe</span>
        <img className='nzme' src={nzme}/>
        </span>
        </div>
      </div>
  );
};

export default Header;
