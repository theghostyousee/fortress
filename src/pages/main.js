import "./main.css";
import React from "react";
import Butterfly from "./media/butterfly.svg";
function main() {
  const tweetLink =
    "https://twitter.com/intent/tweet?text=This%20is%20my%20proof%20of%20participation%20for%20%40winderxyz%F0%9F%AB%A1%0D%0A%0D%0AA%20new%20solidly%20fork%20ve%283%2C3%29%20coming%20on%20%23zkSync.%20&";

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
          <h2>Winder <br /> 
             Upcoming ve(3,3) DEX on @zkSync </h2>
        </div>


        <div className="btn">
          <button onClick={handleClick}>Apply now..</button>
        </div>
      </div>
    </div>
  );
}

export default main;
