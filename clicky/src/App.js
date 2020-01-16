import React, {useState, useEffect} from 'react'
import LettersDisplay from './components/LettersDisplay'
import LettersContext from './utils/LettersContext'

const App =()=>{

  const [lettersState, setLettersState] = useState({
    letters: []
  })

  lettersState.handleScramble = ()=>{

  }
  return(
    <LettersContext.Provider value={lettersState}>

<LettersDisplay/>

    </LettersContext.Provider>

  )
}
export default App
