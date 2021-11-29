import "./App.css";
import React, { useState, useEffect } from "react";
import Clients from "./Components/Clients";
import Pets from "./Components/Pets";

const App = () => {
  const [client, setClient] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState();
  const [filteredClient, setFilteredClient] = useState();
  const [petName, setPetName] = useState({});
  const [isVaccinatedBo, setIsVaccinatedBo] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const url = `api/clients?search=${searchTerm}`;

  const getClient = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setClient(data);
      setFilteredClient(
        client.filter((client) => client.name.includes(searchTerm))
      );
      console.log(client);
    } catch (error) {
      setResponse(false);
      //console.log(response)
    }
  };


  const submitForm = () => {
    setIsLoading(true)
    setShowForm(false)


    
    fetch(url, 'api/pets', {
        method: "POST",
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
        },
        body: 
        {
          name: petName, 
      isVaccinatedBo: true
    },
    })
        .then((resp) => setResponse(true))
        .catch((err) => setResponse(false))
        .finally(() => setTimeout(setIsLoading(false), 5000))
}


  return (
    <div className="App">
      <h1>Veteranian admin-clients</h1>
      <div>
        <div>
          <input onChange={(e) => setSearchTerm(e.target.value)} />
          <button disabled={searchTerm.length <= 2} onClick={getClient}>Search</button>
        </div>

        {response === null ? <p></p> : <div>
         {client.map((client, i) => (
            <div className="Client" key={client.name}>
              {" "}
              <Clients key={i} client={client.name} />


              <div className="Pets">
              {client.pets.map((pet, key) => (
                <div className="Pets" key={key}>
                  {" "}
                  <p>
                     {pet.name} - Vaccinated: {" "}
                   
                      <button key={pet.name}
                      
                        onClick={submitForm}
                      >
                        {isVaccinatedBo.toString()}
                      </button>
                 {" "}
                 </p>
                </div>
              ))} </div>


            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default App;
