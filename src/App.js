import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./App.css"
import Mainsec from './components/mainsec/Mainsec'
import Main2 from './components/main2/Main2'
import Main3 from './components/main3/Main3'
import Main4 from './components/main4/Main4'
import Years from './components/years/Years'
import Sir from './components/sir/Sir'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
import Slider from './components/slider/Slider'
import Purple from './components/purple/Purple'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Mainsec/>
      <Main2/>
      <Years/>
      <Main3/>
      <Main4/>
      <Sir/>
      <Purple/>
      <Form/>
      <Slider/>
      <Footer/>
    </div>
  )
}
