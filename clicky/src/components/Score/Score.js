import React, { useContext } from 'react'
import LettersContext from '../../utils/LettersContext'

const Score = () => {
  const { score } = useContext(LettersContext)

  return (
    //SHOWS CURRENT SCORE IN NAVBAR
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Clicky Game</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#"> Current Score: {score}</a></li>

        </ul>
      </div>

    </nav>

  )
}

export default Score