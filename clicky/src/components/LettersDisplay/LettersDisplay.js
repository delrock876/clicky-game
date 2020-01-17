import React, { useContext } from 'react'
import LettersContext from '../../utils/LettersContext'


const LetterDisplay = _ => {

  const { letters, handleScramble } = useContext(LettersContext)

  return (
    <div className="row">

      {
        letters.map(letter => (
          <div className= "col s3">
            <div
              className="card-panel blue lighten-3" data-name={letter} id="letter"
              onClick={handleScramble}>{letter}
            </div>

          </div>
        ))

      }

    </div>

  )
}


export default LetterDisplay