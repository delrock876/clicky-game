import {createContext} from 'react'

const LettersContext = createContext({
  letters: [],
  clicked:[],
  score: 0,
  modalIsOpen:false,
  handleScramble:()=>{ },
  openModal: ()=>{ }
})
export default LettersContext