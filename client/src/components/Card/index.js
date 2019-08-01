import React from "react"
import "./style.css"

export function Card(props) {
    return (
        <div className="card" >
            <h3 className="card-title">{props.title}</h3>
            <h5>Written by:&nbsp;{props.author.join(", ")}&nbsp;</h5>
            <img src={props.thumbnail} className="card-img-top" alt={props.title} />
            <div className="card-body">

                <p className="card-text">{props.synopsis}</p>
               <a href={props.link}><button className="btn btn-info" id="view-btn"> View</button></a>
               <button className="btn btn-info" id="save-btn" onClick={() =>props.saveBook({...props})}>Save</button>
            </div>
        </div>
    );
};

export function CardSaved(props) {
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            <h5>Written by:&nbsp;{props.author.join(", ")}</h5>
            <img src={props.thumbnail} className="card-img-top" alt={props.title} />
            <div className="card-body">

               <p className="card-text">{props.synopsis}</p>
               <a href={props.link}><button className="btn btn-info" id="view-btn"> View</button></a>
               <button className="btn btn-info" id="delete-btn" onClick={() =>props.deleteBook(props.id)}> Delete </button>
            </div>
        </div>
    );
};
