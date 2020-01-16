import React, {useContext} from 'react'
import LettersContext from '../../utils/LettersContext'


const LetterDisplay =_=>{

const {letters, handleScramble}= useContext(LettersContext)

  return(
    <div>

    {
      letters.map(letter=>(
      <div style={{ backgroundColor: "yellow", height: "4em" }} className="card-panel col s2" name={letter} >{letter}</div>
      ))
    }
 
      <button onClick={()=>handleScramble(letters)}>Shuffle!</button>

    </div>

  )
}


export default LetterDisplay