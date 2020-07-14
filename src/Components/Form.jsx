import React, { useState } from "react";
import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

function Form({ newQuote }) {
  // * Estado de la cita
  const [quote, setQuote] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptoms: "",
  });
  // * Estado de error
  const [error, setError] = useState(false);

  // * Funcion que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    setQuote({
      ...quote,
      [e.target.name]: e.target.value,
    });
  };

  // * Extraer los valores
  const { pet, owner, date, hour, symptoms } = quote;

  // * Funcion del formulario
  const submitQuote = (e) => {
    e.preventDefault();

    // Validar
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Eliminar el mensaje de error
    setError(false);

    // Asignar un ID
    quote.id = uuid();

    // Crear la cita
    newQuote(quote);

    // Reiniciar el form
    setQuote({
      pet: "",
      owner: "",
      date: "",
      hour: "",
      symptoms: "",
    });
  };

  return (
    <React.Fragment>
      <h2>New Quote</h2>
      {error ? <p className="alerta-error">All fields are required</p> : null}

      <form onSubmit={submitQuote}>
        <label htmlFor="">Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={handleChange}
          value={pet}
        />

        <label htmlFor="">Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={handleChange}
          value={owner}
        />

        <label htmlFor="">Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label htmlFor="">Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={handleChange}
          value={hour}
        />

        <label htmlFor="">Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          New Quote
        </button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  newQuote: PropTypes.func.isRequired,
};

export default Form;
