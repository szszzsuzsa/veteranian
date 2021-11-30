import "./App.css";
import React, { useState } from "react";
import Client from "./components/Client";

const App = () => {
  const [client, setClient] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState();


  const url = `api/clients?search=${searchTerm}`;

  const getClient = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setClient(data)
      console.log(client);
    } catch (error) {
      setResponse(false);
    }
  };


  


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
            <div className="Client">
              {" "}
              <Client key={i} client={client} />
              </div>
              ))}
        </div>}


             
                  
               
              


        </div>
        
        </div>
      
  );
};

export default App;
