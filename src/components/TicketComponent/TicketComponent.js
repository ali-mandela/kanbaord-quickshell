import React from "react";

import "./ticketComponent.css";

// const imgUrl = "https://tse1.explicit.bing.net/th?id=OIP.SxuyKL-Ca-_bXp1TC4c4-gHaF3&pid=Api&P=0&h=180";

const TicketComponent = ({ key, ticket }) => {
  return (
    <>
      <div className="ticketDiv">
        <div className="ticketDivHeader">
          <h4>{ticket.id}</h4>
          <img src={imgUrl} alt="imgrty" />
        </div>

        <div className="ticketDivTitle">
          <h5>{ticket.title}</h5>
        </div>

        <div className="ticketDivFooter">
          <span>
            <i className="fa-solid fa-ellipsis "></i>
          </span>
          <span className="spn1">
            <i className="fa-solid fa-globe"></i>
            <h5 style={{ display: "inline" }}>{ticket?.tag[0]}</h5>
          </span>
        </div>
      </div>
    </>
  );
};

export default TicketComponent;
