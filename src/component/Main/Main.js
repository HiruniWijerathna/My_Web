import React from 'react'
import "./Main.css";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Services from '../Services/Services';
import SideBar from "../Resume/SideBar/SideBar";
import Project from '../Portfolio/Project/Project';
import Contact from '../Contact/Contact';
import Footer from '../footer/footer';

function Main() {
  return (
    <div>
        <Nav/>
        <Home/>
        <Services/>
        <SideBar />
        <Project/>
        <Contact/>
        <Footer/>

      
    </div>
  )
}

export default Main
