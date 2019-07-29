import React from "react"

function CardBtn(props) {
    return (
      <div>
      <button className={`card-btn ${props["data-value"]}`} {...props} ></button>
      </div>
    );
  }
  
export default CardBtn;