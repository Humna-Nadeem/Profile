import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./App.css"
import Mainsec from './components/mainsec/Mainsec'
import Main2 from './components/main2/Main2'
import Main3 from './components/main3/Main3'
import Main4 from './components/main4/Main4'
import Main5 from './components/main5/Main5'
import Years from './components/years/Years'
import Sir from './components/sir/Sir'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
import Slider from './components/slider/Slider'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Mainsec/>
      <Main2/>
      <Main3/>
      <Years/>
      <Main4/>
      <Sir/>
      <Main5/>
      <Form/>
      <Slider/>
      <Footer/>
    </div>
  )
}
