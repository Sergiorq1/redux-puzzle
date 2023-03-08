/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cardArray, setCardArray] = useState([])
  const [cardsChosen, setCardsChosen] = useState([])
  const [cardsChosenId, setCardsChosenId] = useState([])
  const [cardsWon, setCardsWon] = useState([])
  const [CARD_ARRAY, set_CARD_ARRAY] = useState([])

  const getData=()=>{
    fetch('images.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        set_CARD_ARRAY(myJson)
      });
  }
  useEffect(()=>{
    getData()
    setCardArray(CARD_ARRAY)
  },[CARD_ARRAY])

  const chooseImage = (cardId) => {
    // Converts cardId to string. cardId is taken from RETURN
    cardId = cardId.toString()
    // If card is won, the image turns white
    if(cardsWon.includes(cardId)) {
      return window.location.origin + '/images/white.png'
    }
    // if card has been chosen
    else if(cardsChosenId.includes(cardId)) {
      return CARD_ARRAY[cardId].images
    // If the card is not won, it shows the back of the card
    } else {
      return window.location.origin + '/images/back.png'
    }
  }

  const flipCard = async (cardId) => {
    let alreadyChosen = cardsChosen.length
    setCardsChosen([...cardsChosen, cardArray[cardId].name])
    setCardsChosenId([cardsChosenId, cardId])
    if (alreadyChosen === 1) {
      setTimeout(() => {
        checkForMatch()
      }, 100)
    }
  }
  // Checks for match and what happens if theres no match
  const checkForMatch = async () => {
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    // If you picked the same item
    if(optionOneId === optionTwoId) {
      alert('You have clicked the same image!')
      setCardsChosen([])
      setCardsChosenId([])

    // If the two images chosen are the same 
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      // Sets the cardsWon state  
      setCardsWon([...cardsWon, optionOneId, optionTwoId])
      setCardsChosen([])
      setCardsChosenId([])
      // If all cards have been chosen
      if (cardsWon.length === CARD_ARRAY.length) {
        alert('Congratulations! You found them all!')
      }
    // If they don't match
    } else {
      alert('Sorry, try again')
    }
    setCardsChosen([])
    setCardsChosenId([])

  }

  return (
      <div className='App'>
        <div className="row">
            <h1>Start matching now!</h1>
              <div className="grid">
                {cardArray.map((card, key) => {
                  return(
                    <img
                      key={key}
                      src={chooseImage(key)}
                      data-id={key}
                      onClick={(event) => {
                        let cardId = event.target.getAttribute('data-id')
                        if(!cardsWon.includes(cardId.toString())) {
                          flipCard(cardId)
                        }
                      }}
                    />
                  )
                })}
              </div>
              <div>
                <h5>Total matches:
                  <span id="result">{
                    (cardsWon.length)/2
                  }
                  </span>
                </h5>
              </div>
        </div>
      </div>
  );
  
}

export default App;