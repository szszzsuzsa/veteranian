import './App.css';
import React, {useState, useEffect} from 'react';
import Clients from './Components/Clients';
import LoadingMask from './Components/LoadingMask';

const App = () => {


  const [client, setClients] = useState(null);
  const [showSub, setShowSub] = useState(null);
  const [response, setResponse] = useState(null);

  const url = "/api/clients?search=${input}";

  const getClients = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setClients(data);
    } catch (error) {
      setResponse(false);
    }
  };

  const subHandler = () => {
    setTimeout(function () {
      setShowSub(true)
    }, 5000)
  }

  useEffect(() => {
    getClients()
    subHandler()
  }, [])

  return (
    <div className="App">
      
      <div className="App">
      <h1>Veteranian admin-clients</h1>

      <div><input onClick={()=>setClients(client)} ></input>
      <button>Get</button></div>
      {client !== null ? client.map((client, index) => <Clients key={index} client={client} />) :<LoadingMask />}
   
    </div>
    <div>     <Clients></Clients>
</div>





    </div>
  )
}

export default App
