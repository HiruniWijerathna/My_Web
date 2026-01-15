import React from 'react'
import "./Main.css";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Services from '../Services/Services';
import SideBar from "../Resume/SideBar/SideBar";

function Main() {
  return (
    <div>
        <Nav/>
        <Home/>
        <Services/>
        <SideBar />

      
    </div>
  )
}

export default Main
