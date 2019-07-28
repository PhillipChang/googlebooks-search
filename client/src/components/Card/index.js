import React from "react"
import CardBtn from "../CardBtn"
import "./card.css"

function Card(props) {
    return (
        <div className="card" >
            <h5 className="card-title">{props.title}</h5>
            <h4>Written by:{props.author}</h4>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">

                <p className="card-text">{props.synopsis}</p>
               <CardBtn link={props.link}/>
               <CardBtn handleDelete = {props.handleDelete}/>
            </div>
        </div>
    )
}


export default Card;