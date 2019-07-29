import React from "react"
import CardBtn from "../CardBtn"
import "./style.css"

function Card(props) {
    return (
        <div className="card" >
            <h5 className="card-title">{props.title}</h5>
            <h4>Written by:&nbsp;{props.author}</h4>
            <img src={props.thumbnail} className="card-img-top" alt={props.title} />
            <div className="card-body">

                <p className="card-text">{props.synopsis}</p>
               <a href={props.link}><button> View</button></a>
               <button onClick={() =>props.saveBook(props.id)}>Save</button>
               <button onClick={() =>props.deleteBook(props.id)}> Delete </button>
            </div>
        </div>
    )
}


export default Card;