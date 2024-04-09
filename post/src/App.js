import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Mon from './Mon';

function App() {
const [mons, setMons] = useState([]);
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
        axios.get("https://pokeapi-ptvv.onrender.com/pokemon/")
        .then(function (response) {
            console.log(response.data.length);
            
            let arr = [];
            response.data.forEach(element => {
                arr.push(<Mon title={element.title} image_url={element.image_url} description={element.description}/>
                );
            });
            /*
                <div>
                        <h3>{element.title}</h3>
                        <img src={element.image_url}/>
                        <p>{element.description}</p>
                    </div>
            */
            setMons(arr);
        })
        .catch(function(error) {
            console.error(error);
        });
    }, []);

    function UpdatePidgey() {
        /*
         {
        "_id": "659d88b6d44184e7d92ad1c8",
        "image_url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        "title": "Pidgey",
        "description": "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back. ",
        "type": "Normal"
    }
        */
       let Pidgeot =  {
        "_id": "659d88b6d44184e7d92ad1c8",
        "image_url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        "title": "Pidgeot",
        "description": "Evolved form of Pidgey, the Super Eagle. Murica",
        "type": "Normal"
    }

        axios.put('https://pokeapi-ptvv.onrender.com/pokemon/659d88b6d44184e7d92ad1c8', Pidgeot)
        .then((response)=> console.log(response));
    }

    function UpdatePokemon() {
        let id = document.getElementById('formID').value;
        let title = document.getElementById('formTitle').value;
        let description = document.getElementById('formDescription').value;
        let image_url = document.getElementById('formImage').value;
        let type = document.getElementById('formType').value;

        let data = {
            _id: id,
            title: title,
            description: description,
            image_url: image_url,
            type: type
        }
        fetch('url', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'Application/JSON'
            }
        })
        
        axios.put('https://pokeapi-ptvv.onrender.com/pokemon/' + id, data)
        .then((response) => console.log(response));
    }

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

      <input placeholder='Enter the API ID' id="formID" />
      <input placeholder='Whos that Pokemon' id="formTitle" />
      <input placeholder='Pokedex Entry' id="formDescription" />
      <input placeholder="image_url?" id="formImage" />
      <input placeholder='Type' id="formType" />

      <button onClick={UpdatePokemon}>Click to Update Pidgey</button>
      {/* <button onClick={UpdatePidgey}>Click to Update Pidgey</button> */}

      {mons}
    </div>
  );
}

export default App;
