import {createContext} from 'react'

const LettersContext = createContext({
  letters: [],
  clicked:[],
  handleScramble:()=>{ },
  handleToggle: ()=>{ }
})
export default LettersContext