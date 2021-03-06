import React, { useState } from 'react'
import Score from './components/Score'
import LettersDisplay from './components/LettersDisplay'
import LettersContext from './utils/LettersContext'
import shuffle from 'shuffle-array'
import swal from 'sweetalert'

const App = () => {

  const [lettersState, setLettersState] = useState({
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    clicked: [],
    score: 0
  })

  //SHUFFLE LETTERS ARRAY AND BRINGS IN CLICKED ARRAY 
  lettersState.handleScramble = ({ target: { dataset: { name } } }) => {
    let letters = shuffle(JSON.parse(JSON.stringify(lettersState.letters)))
    let clicked = JSON.parse(JSON.stringify(lettersState.clicked))
    let score = lettersState.score

    //RESET IF LOSE
    if (clicked.includes(name)) {
      // --modal/alert--
      swal({
        text: `High Score: ${score}`,
        title: `You lose!`,
        icon: 'error',
      })
      //  --end alert--
      clicked = []
      score = 0
      setLettersState({ clicked, score })

      //IF ALL CLICKED CORRECTLY, YOU WIN
    } else if(score === 12){
      clicked = []
      
      swal({
        text: `Nice work`,
        title: `You win!`,
        icon: 'success',
      })
      score = 0
      setLettersState({clicked, score})
    }
    //CONTINUE GAME, ADDS CLICKED LETTER TO NEW ARRAY
    
      clicked.push(name)
      score++
    console.log(score)
    //UPDATES NEW VALUES 
    setLettersState({ ...lettersState, clicked, letters, score })
  }

  return (

    <LettersContext.Provider value={lettersState}>

      <Score />
      <LettersDisplay />

    </LettersContext.Provider>

  )
}
export default App
