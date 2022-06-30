import React from 'react';
import './App.css';
import Data from "./data/data.js";

function App() {
  return (
    <div className="App">
      <form action='http://localhost:80/ico/vypsani.php' method="post">
        <div className='form'>
        <h1>IČO</h1>
        <input name="ico" onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
            alert("Zadávat lze pouze čísla")
          }
        }}
    />
        <h1>Název firmy</h1>
        <input name="nazev" type="text"></input>
        <br></br>
        <button type="submit" name='submit' value="vyhledat">Vyhledat</button>
        <br></br>
        </div>
        <h1>Výpis z Databáze</h1>
        <Data/>
      </form>
    </div>
  );
}

export default App;
