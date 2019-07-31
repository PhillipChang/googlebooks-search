import React from "react"
import Container from "../Container";
import "./style.css"




export function Jumbotron(props) {
    return (

        <Container>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 title" >(React) Google Books {props.navName}</h1>
                    <p className="lead title "> Search for a saved book of Interest</p>
                </div>

            </div>
        </Container>
    )
}

export function JumbotronSave(){
    return (
        <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 title" >Saved Books</h1>
                    <p className="lead title "> Your Saved Books All In One Place</p>
                </div>
            </div>  
    )

}

