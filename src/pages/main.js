import "./main.css";
import React from "react";
import Butterfly from "./media/butterfly.svg";
function main() {
  const tweetLink =
    "https://twitter.com/intent/tweet?text=Roll%20my%20%24DICE%20with%20%40JustDiceLOL%20%F0%9F%8E%B2&";

  const handleClick = () => {
    window.open(tweetLink, "_blank");
  };
  return (
    <div className="main">
      {/* <img className= "logo" src={Butterfly}></img> */}
      <div className="content">
        <div className="image">
          <img src={Butterfly}></img>
        </div>
        <div className="title">
          <h2>  
          Decentralized Casino on Ethereum</h2>
        </div>


        <div className="btn">
          <button onClick={handleClick}>Dice now..</button>
        </div>
      </div>
    </div>
  );
}

export default main;
