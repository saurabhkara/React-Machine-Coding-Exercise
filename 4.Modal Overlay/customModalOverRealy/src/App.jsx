import "./App.css";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleOpenCloseModal = () => {
    setIsClicked(!isClicked);
  };

  const handleAcceptedOffer = () => {
    setIsOfferAccepted(true);
    setIsClicked(false);
  };
  return (
    <div>
      <div className="show-offer">
        {isOfferAccepted ? (
          <div>Offer Accepted</div>
        ) : (
          <button className="showoffer-btn" onClick={handleOpenCloseModal}>
            Show Offer
          </button>
        )}
      </div>
      {isClicked && (
        <Modal
          handleOpenCloseModal={handleOpenCloseModal}
          handleAcceptedOffer={handleAcceptedOffer}
        />
      )}
    </div>
  );
}

export default App;
