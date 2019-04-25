import React from 'react';
import Score from './Score';
import '../css/Header.css';

// nav bar containing the score
const Header = (props) => {
    return(
        <nav>
    <div className="nav-wrapper">
      <div href="myporfolio.com" className="left brand-logo recallLogo">Total-React-Recall</div>
      <div href="myporfolio.com" className="brand-logo center centerText">Click a pic to get started!</div>
      <ul id="nav-mobile" className="right scoreTop">
        <li>
          {/* my little score card here */}
          <Score 
          score={props.score} 
          highScore={props.highScore} 
          round={props.round}
          />
        </li>
        
      </ul>
    </div>
    <div id="" className="center s12 blue-text scoreBottom">
        
          {/* my little score card here */}
          <Score 
          score={props.score} 
          highScore={props.highScore} 
          round={props.round}
          />
        
        
      </div>
    <div href="myporfolio.com" className="blue-text center s12 lowerText">Touch a pic to get started!</div>
  </nav>
    )
}

export default Header;