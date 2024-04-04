import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import axios from 'axios';

function App() {

    /*
    fetch("https://pokeapi-ptvv.onrender.com/pokemon/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            }
        }).then((response)=> {
            console.log(response);
            return response.json()
        })
        .then((data)=>console.log(data));
    */

    useEffect(function () {
        let data = {
            _id: "",
                image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png",
                title: "Torchic",
                description: "Fire Chick",
                type: "Fire"
        };
        axios.post("https://pokeapi-ptvv.onrender.com/pokemon/", data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function(error) {
            console.error(error);
        });
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
