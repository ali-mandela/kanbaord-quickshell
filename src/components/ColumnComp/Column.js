import React from "react";
import TicketComponent from "../TicketComponent/TicketComponent";
import "./Column.css";

const ColumnBoard = ({ title, tickets }) => {
  // Change "data" to "tickets"
  // console.log('Title:', title);
  // console.log('Groups:', JSON.stringify(tickets["groups"], null, 2));

  var a = JSON.stringify(tickets["groups"], null, 2);
  // console.log(a);
  // console.log();

  return (
    <>
      <div className="columnDiv">
        <div className="columnDivHeader">
          <span className="columnTitle">
            {tickets.userName} &nbsp;&nbsp;
            <span>{Object.keys(tickets?.groups).length}</span>
          </span>
          <span>
            <i class="fa-solid fa-ellipsis "></i>
            &nbsp;&nbsp;
            <i className="fa-regular fa-plus "></i>
          </span>
        </div>
        <div className="ticketContainer">
          {Object.entries(tickets.groups).map(([groupName, tickets]) => (
            <div key={groupName}>
              {/* <h2>{groupName}</h2> */}
              {tickets.map((ticket) => (
                <TicketComponent key={ticket.id} ticket={ticket} /> // Render your Ticket component here
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColumnBoard;
