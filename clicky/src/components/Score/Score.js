import React, {useContext} from 'react'
import LettersContext from '../../utils/LettersContext'

const Score =()=>{
const {score}= useContext(LettersContext)

  return(

    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Clicky Game</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
  <li><a href="#">Score: {score}</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>

  )
}

export default Score