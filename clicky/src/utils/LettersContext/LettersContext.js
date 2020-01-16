import React, {createContext} from 'React'

const LettersContext = createContext({
  letters: [],
  handleScramble:()=>{ }
})
export default LettersContext