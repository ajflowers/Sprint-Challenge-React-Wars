import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import CharCard from "./CharCard";

import './App.css';

const CardsPane = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background: darkblue;
  color: white;
  padding: 5px 10px;
  margin: 10px;
  font-size: 20px;
  border: 0px;
  border-radius: 10px;

  ${props => (props.type === "null" ? `display: none` : null)}
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  const [searchURL, setSearchURL] = useState("https://swapi.co/api/people/");
  const [nextURL, setNextURL] = useState("null");
  const [prevURL, setPrevURL] = useState("null");

  useEffect(() => {
    axios.get(`${searchURL}`)
      .then(response =>{
        console.log(response);
        let charList = response.data.results;
        console.log(charList);
        setPeople(charList);
        console.log(response.data.next);
        setNextURL(String(response.data.next));
        console.log(response.data.previous);
        setPrevURL(String(response.data.previous));      
      })
      .catch((err) => {
        console.log(err);
      })
  }, [searchURL])

// function nextButton() {
//   if (nextURL != null) {
//     setSearchURL(nextURL);
//   }
// }
// function prevButton() {
//   console.log=("click");
//   if (prevURL != null) {
//     setSearchURL(prevURL);
//   }
// }

// function setButtons() {
//   if (nextURL === null) {
//     setNextPageStatus("hidden");
//   } else {
//     setNextPageStatus("shown");
//   }
//   if (prevURL === null) {
//     setPrevPageStatus("hidden");
//   } else {
//     setPrevPageStatus("shown");
//   }
// }



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ButtonDiv>
        <Button type={prevURL} onClick={() => setSearchURL(prevURL)}>Previous Page</Button>           
        <Button type={nextURL} onClick={() => setSearchURL(nextURL)}>Next Page</Button>
      </ButtonDiv>
      <CardsPane>
        {people.map(person => {
          return (
            <CharCard
              key={person.name}
              name={person.name}
              gender={person.gender}
              birthYear={person.birth_year}
              hairColor={person.hair_color}
              eyeColor={person.eye_color}
              height={person.height}
              mass={person.mass}
            />
          );
        })}

      </CardsPane>

    </div>
  );
}

export default App;
