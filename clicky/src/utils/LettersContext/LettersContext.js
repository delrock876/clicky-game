import {createContext} from 'react'

const LettersContext = createContext({
  letters: [],
  clicked:[],
  handleScramble:()=>{ },
  handleLose: ()=>{ }
})
export default LettersContext