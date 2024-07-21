// eslint-disable-next-line react/prop-types
export default function Modal({ handleOpenCloseModal, handleAcceptedOffer }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={handleOpenCloseModal}>
          X
        </button>
        <div className="content">
          Please click button below to accept the amazing offers
        </div>
        <button className="accept-btn" onClick={handleAcceptedOffer}>
          Accept
        </button>
      </div>
    </div>
  );
}
