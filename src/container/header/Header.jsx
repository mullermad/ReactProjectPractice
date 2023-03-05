

import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import "./header.css";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amaizing with GPT-3 OpenAI
        </h1>
        <p>lets bed any for travelling bfdkkjjjhvjkdfzzhvhjxzcvjhvjg bfdk
          kjjjhvjkdfzzhvhjxzcvjhvjg bfdkkjjjhvjkdfzzhvhjxzc
          vjhvjhbvjxCzzzzzhvhjxzcvjhvjhbvjxC</p>
        <div className='gpt3__header-content__input'>
          <input type="email"  placeholder='your email address '/>
          <button type='button'>Get started</button>
           
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested accored gvhjvkxjbhkjzbkvjb</p>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
        </div>
      </div></div>
  )
}

export default Header