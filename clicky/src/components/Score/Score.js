import React, { useContext } from 'react'
import LettersContext from '../../utils/LettersContext'

const Score = () => {
  const { score } = useContext(LettersContext)

  return (
    //SHOWS CURRENT SCORE IN NAVBAR
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Clicky Game</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#"> Current Score: {score}</a></li>

        </ul>
      </div>

    </nav>

  )
}

export default Score