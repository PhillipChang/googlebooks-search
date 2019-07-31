import React from "react"
import Container from "../Container";
import "./style.css"


export function Jumbotron(props) {
    return (
        <Container>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 title" >Google Books Library {props.navName}</h1>
                    <p className="lead title "> Your Favorite Books Just a Click Away</p>
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

