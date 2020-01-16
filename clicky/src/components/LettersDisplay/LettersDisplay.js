import React, {useContext} from 'react'
import LettersContext from '../../utils/LettersContext'


const LetterDisplay =_=>{

const {letters, handleScramble}= useContext(LettersContext)

  return(
    <div>

    {
      letters.map(letter=>(
      <div 
      style={{ backgroundColor: "yellow", height: "4em" }} className="card-panel col s2" name={letter} 
          onClick={() => handleScramble(letters)}>{letter}</div>
      ))
    }

    </div>

  )
}


export default LetterDisplay