import React, { useState, useEffect } from "react";
import './App.css'; // Importez votre fichier CSS pour styliser la grille si nécessaire

const App = () => {
  const [contacts, setContacts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/contacts", requestOptions)
      .then((response) => response.json())
      .then((result) => setContacts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid-container">
      {contacts.map((contact) => (
        <div className="container" key={contact.id}> 
          <img className="contact-image" src={process.env.PUBLIC_URL + '/image/' + contact.image} alt={` de ${contact.nom}`} />
          <div className="content">
            <p><span className="gras">Nom </span> : {contact.nom}</p> 
            <p><span className="gras">Email </span> : {contact.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
