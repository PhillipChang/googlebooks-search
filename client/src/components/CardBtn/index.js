import React from "react"
import { Link } from "react-router-dom";

function CardBtn(props) {
    return (
      <div>
      <Link to={props.link}>
      <button className={`card-btn ${props["data-value"]}`} {...props} >View</button>
      </Link>
      </div>
    );
  }
  
export default CardBtn;