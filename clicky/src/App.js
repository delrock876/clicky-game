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

  lettersState.handleScramble = ({ target: { dataset: { name } } }) => {
    let letters = shuffle(JSON.parse(JSON.stringify(lettersState.letters)))
    let clicked = JSON.parse(JSON.stringify(lettersState.clicked))
    let score = lettersState.score

    // console.log(name)
    if (clicked.includes(name)) {
      swal({
        text: `High Score: ${score}`,
        title: `You lose!`,
        icon: 'error',
      })
      clicked = []
      score = 0
      setLettersState({ clicked, score })
    } else {
      clicked.push(name)
      score++
      console.log(score)
      console.log(clicked)
    }
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
