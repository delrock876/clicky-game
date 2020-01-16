import React, {createContext} from 'react'

const LettersContext = createContext({
  letters: [],
  handleScramble:()=>{ }
})
export default LettersContext