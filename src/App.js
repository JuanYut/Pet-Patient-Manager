import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import Quote from "./Components/Quote";
import Logo from "./images/perritoLogoPNG.png";

function App() {
  // * Citas en Local Storage
  let initialQuotes = JSON.parse(localStorage.getItem("quotes"));
  if (!initialQuotes) {
    initialQuotes = [];
  }

  // * Lista de citas
  const [quotes, setQuotes] = useState([]);

  // * Use Effect para realizar ciertas operaciones cuando el state cambie
  useEffect(() => {
    let initialQuotes = JSON.parse(localStorage.getItem("quotes"));
    if (initialQuotes) {
      localStorage.setItem("quotes", JSON.stringify(quotes));
    } else {
      localStorage.setItem("quotes", JSON.stringify([]));
    }
  }, [quotes]);

  // * Funcion que tome las citas actuales y agregue las nuevas
  const newQuote = (quote) => {
    setQuotes([...quotes, quote]);
  };

  // * Funcion para eliminar cita
  const deleteQuote = (id) => {
    const newArray = quotes.filter((quote) => quote.id !== id);
    setQuotes(newArray);
  };

  // * Mensaje condicional
  const title = quotes.length === 0 ? "No Quotes" : "Quotes List";

  return (
    <React.Fragment>
      <div className="title">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="title-text">Pet Patient Manager</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form newQuote={newQuote} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {quotes.map((quote) => (
              <Quote key={quote.id} quote={quote} deleteQuote={deleteQuote} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
