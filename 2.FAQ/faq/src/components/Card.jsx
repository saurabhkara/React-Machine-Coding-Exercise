import PropTypes from "prop-types";
import { useState } from "react";

Card.propTypes = {
  id: PropTypes.node.isRequired,
  faq: PropTypes.object,
};

export default function Card({ faq, id, handleSelectedCard, selectedCard }) {
  return (
    <div key={id} className={"card"}>
      <div className="cardQuestion">
        <button onClick={() => handleSelectedCard(id)}>></button>
        <h4 style={{ marginLeft: "10px" }}>{faq.question}</h4>
      </div>
      {selectedCard === id ? <div className="answer">{faq.answer}</div> : null}
    </div>
  );
}
