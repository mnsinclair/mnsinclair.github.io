import React from "react";

import { faEnvelope, faLinked } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImage from "../images/profile.jpeg";

function Card(props) {
  return (
    <div className="Card">
      <img className="Card--img" src={profileImage} />
      <div className="Card--content">
        <h1 className="Name">{props.name}</h1>
        <h2 className="Title">{props.title}</h2>
        <p>{props.message}</p>
      </div>
      <footer className="Card--footer">
        <a
          className="Card--footer--icon--wrapper"
          href={`mailto:${props.email}`}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="Card--footer--icon mailColor"
          />
        </a>
        <a className="Card--footer--icon--wrapper" href={props.linkedinUrl}>
          <FontAwesomeIcon
            icon={faLinkedin}
            className="Card--footer--icon linkedinColor"
          />
        </a>
        <a className="Card--footer--icon--wrapper" href={props.githubUrl}>
          <FontAwesomeIcon
            icon={faGithub}
            className="Card--footer--icon githubColor"
          />
        </a>
      </footer>
    </div>
  );
}

export default Card;
