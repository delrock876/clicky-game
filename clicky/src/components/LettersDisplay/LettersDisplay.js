import React, { useContext } from 'react'
import LettersContext from '../../utils/LettersContext'


const LetterDisplay = _ => {

  const { letters, handleScramble, handleToggle } = useContext(LettersContext)

  return (
    <div className= "row">

      {
        letters.map(letter => (
          <div>
            <div
            className="card col s4" data-name={letter} id="letter"
            onClick={handleToggle}>{letter}
            </div>
            
            </div>
        ))

      }

    </div>

  )
}


export default LetterDisplay