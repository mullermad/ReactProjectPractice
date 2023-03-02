import React from 'react'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from "../../assets/logo.svg";



function Navbar() {
  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
      <div className='gpt3_navbar-links_logo'>
        <img src={logo} alt="logo" />

</div>
<div className='gpt3__navbar_links_container'>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>

</div>
<div className='gpt3_navbar_sign'>
  <p>sign in</p>
  <button type='button'>sign up</button>

</div>
<div className='gpt3_navbar_menu'>
  {toggleMenu ? <RiCloseLine color="#fff"  size={27} onClick={()=>setToggleMenu(false)}/>
  : <RiMenu3Line color="#fff"  size={27} onClick={()=>setToggleMenu(true)} />}

  
{toggleMenu && ( <div className='gpt3__navbar_menu_container scale-up-center'>
  <div className='gpt3__navbar_menu_container_links'>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </div>
  <div className='gpt3_navbar_menu_container_links_sign'>
  <p>sign in</p>
  <button type='button'>sign up</button>
  </div>
</div>)}
</div>
      </div>

    </div>
  )
}

export default Navbar