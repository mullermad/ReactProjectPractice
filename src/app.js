import React from 'react'
import {Article,Brand,Cta,Features,Navbar} from "./Components";
import {Blog,Feature,Footer,Header,Possibility,Whatgp3} from "./container";
import "./App.css";
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
       <Header />

      </div>
      <Brand />

       <Whatgp3 />
       <Feature />
       <Possibility />
       <Cta />
       <Blog />
       <Footer />
    </div>
  )
}

export default App;