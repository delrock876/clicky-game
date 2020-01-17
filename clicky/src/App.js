import React, { useState } from 'react'
import LettersDisplay from './components/LettersDisplay'
import LettersContext from './utils/LettersContext'
import shuffle from 'shuffle-array'
console.log(shuffle([1, 2, 3, 4, 5]))
const App = () => {

  const [lettersState, setLettersState] = useState({
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    clicked: []
  })

  lettersState.handleToggle = ({ target: { dataset: { name } } }) => {
    console.log(name)
    let letters = shuffle(JSON.parse(JSON.stringify(lettersState.letters)))
    setLettersState({ ...lettersState, letters })
  }


  return (

    <LettersContext.Provider value={lettersState}>

      <LettersDisplay />

    </LettersContext.Provider>

  )
}
export default App
