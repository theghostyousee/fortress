import "./main.css";
import React from "react";
import Butterfly from "./media/butterfly.svg";
function main() {
  const tweetLink =
    "https://twitter.com/intent/tweet?text=Upgrade%20your%20investments%20with%20%40FortressDefi%0D%0A%0D%0AThe%20next-level%20decentralized%20investment%20platform%20on%20%40Arbitrum";

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
          <h2>FORTRESS PROTOCOL </h2>
        </div>

        <div className="paragraph">
          <p>
            Experience a next-level decentralized investment platform on
            Arbitrum
          </p>
        </div>
        <div className="btn">
          <button onClick={handleClick}>Apply now..</button>
        </div>
      </div>
    </div>
  );
}

export default main;
