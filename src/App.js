import './App.css';
import Products from './Products';
import { useState } from 'react';


function App() {
const title = 'React Ptractice';
const link= 'www.google.com'
const[name, setName]= useState('Sandalson');
const[age, setAge]= useState(32);

const changeName= ()=>{
  setName('Mickey')
  setAge(24)
}


  return (
    <div className="App">
      <div className="landing-page">
        <h1 onClick={changeName}>{title}</h1>
        <p>{name} is {age} years old <a href={link}>more...</a></p>
      </div>

      <Products/>
    </div>
  );
}

export default App;
