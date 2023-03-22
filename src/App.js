import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries, setcountries]=useState([])
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>setcountries(data))

  },[])
  return(
      <div>
        <h1>My RestCountries Visit Me</h1>
        <h2>Available:{countries.length}</h2>
      {
        countries.map(country=> <Country name={country.name.common} population={country.population}></Country>)
      }
      </div>
    
  )
}
function Country(props){
  return(
    <div>
      <h2>Name:{props.name}</h2>
      <h4>Population:{props.population}</h4>
    </div>
  )
}

export default App;
