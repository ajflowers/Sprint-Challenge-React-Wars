import React from "react";
import styled from "styled-components";


const CardDiv = styled.div`
    width: 400px;
    max-width: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const CharCard = props => {

    return(
        <CardDiv key={props.name}>
            <h2>{props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Born in: {props.birthYear}</p>
            <p>Hair color: {props.hairColor}</p>
            <p>Eye color: {props.eyeColor}</p>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass}kg</p>           
        </CardDiv>

    );
}

export default CharCard;