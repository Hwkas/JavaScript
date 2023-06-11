import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name"> {props.name}</h2>
        <Avatar imgUrl={props.imgUrl} />
      </div>
      <div className="bottom">
        <Detail detail={props.phone} />
        <Detail detail={props.email} />
      </div>
    </div>
  );
}

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgUrl={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

export default Card;
export { createCard };
