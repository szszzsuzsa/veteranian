import React from "react";
import Pets from "./Pets"


const Client = ({client, pets, key, pet, i}) => {

    return (
        
            <div className="Client">
                <p>{client.name}</p> 
                
                {client.pets.map((pet, key) => (<Pets key={key} pet={pet}/>))}
            </div>
    
              )}
export default Client;