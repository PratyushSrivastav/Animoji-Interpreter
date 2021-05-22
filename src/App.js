import React, { useState } from "react";
import "./styles.css";

const animalDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🐈‍⬛": "Black Cat",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐷": "Pig Face",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐽": "Pig Nose",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant"
};

var animojiKnown = Object.keys(animalDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
    var userInput = event.target.value;

    var meaning = animalDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't support this value";
    }

    setMeaning(meaning);
  }

  function animojiClickHandler(emoji) {
    var meaning = animalDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Animal Emoji Interpreter</h1>
      <input onChange={animalInputHandler}></input>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginTop: "1rem",
          fontSmooth: "auto"
        }}
      >
        {meaning}{" "}
      </div>

      <h3 style={{ margin: "1rem", padding: "1rem" }}>Animals we support</h3>
      {animojiKnown.map(function (emoji) {
        return (
          <span
            onClick={() => animojiClickHandler(emoji)}
            style={{
              fontSize: "1.5rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
