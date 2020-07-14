import React from "react";
import PropTypes from "prop-types";
import Dog from "../images/perritoGIF.gif";

function Quote({ quote, deleteQuote }) {
  return (
    <div className="cita">
      <div className="quote">
        <img className="pet container" src={Dog} alt="Dog" />

        <div className="quote-info">
          <p>
            Pet: <span>{quote.pet}</span>
          </p>
          <p>
            Owner: <span>{quote.owner}</span>
          </p>
          <p>
            Date: <span>{quote.date}</span>
          </p>
          <p>
            Hour: <span>{quote.hour}</span>
          </p>
          <p>
            Symptoms: <span>{quote.symptoms}</span>
          </p>
        </div>
      </div>

      <button
        onClick={() => deleteQuote(quote.id)}
        className="button eliminar u-full-width"
      >
        Delete &times;
      </button>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  deleteQuote: PropTypes.func.isRequired,
};

export default Quote;
