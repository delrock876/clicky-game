import React, {useState, useEffect} from 'react'
import LettersDisplay from './components/LettersDisplay'
import LettersContext from './utils/LettersContext'

const App =()=>{

  const [lettersState, setLettersState] = useState({
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
  })

  lettersState.handleScramble = letters =>{
      
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = letters[i]
      letters[i] = letters[j]
      letters[j] = temp
    }
    setLettersState({...lettersState, letters})
    console.log(letters)
    return letters

  }

  return(

    <LettersContext.Provider value={lettersState}>

<LettersDisplay/>

    </LettersContext.Provider>

  )
}
export default App
