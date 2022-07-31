import React from "react"
import Photo from "./components/Photo"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Buttons from "./components/Buttons"



export default function App(){
  
  return(
    <div className="back-drop">
      <Photo/>
      <Header/>
      <Buttons/>
      <MainContent/>
      <Footer/>
    </div>
  )
  
}