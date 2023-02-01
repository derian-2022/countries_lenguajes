import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {

  //CAPTURAR LA INFO DEL USUARIO Y HACER DESPLIEGUE DIMAMICO
  //CREAR UN FORMULARIO CON UN INPUT
  //CAPTURAR LA INFO DEL INPUT
  //USAR ESA INFO PARA HACER OTRO LLAMADO A LA API
  //DESPLEGAR LA INF
  //CREAR UN NUEVO COMPONENT PARA CADA PAIS
  // URL: https://restcountries.com/v3.1/lang/spa
  //LA INF Q SE DESPLEGUE ES:
  // BANDERA, NOMBRE DEL PAIS, CAPITAL, HABITANTES
 

  const [countries, setCountries] = useState()
  const [inputValue, setInputValue] = useState("spa")

  useEffect(() => {
   const url= `https://restcountries.com/v3.1/lang/${inputValue}`
   axios.get(url)
   .then(res => setCountries(res.data))
   .catch(err => console.log(err))
   

  }, [inputValue])
  
  const handleSubmit= e => {
    e.preventDefault()
    setInputValue(e.target.inputLanguage.value)
  }

  return (
    
    <div className="App">
      <form className='Card_form' onSubmit={handleSubmit}>
        <input className='Card_lang' id="inputLanguage" type="text" />
        <button className='Card_btn'>Submit</button>
      </form>
      
      {
        	countries?.map(country => (
          	<Countries 
            	key={country.area}
            	country={country}

             />
           ))
      	}
    </div>
  )
}

export default App
