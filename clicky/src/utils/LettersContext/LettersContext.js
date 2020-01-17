import {createContext} from 'react'

const LettersContext = createContext({
  letters: [],
  clicked:[],
  score: 0,
  handleScramble:()=>{ }
})
export default LettersContext