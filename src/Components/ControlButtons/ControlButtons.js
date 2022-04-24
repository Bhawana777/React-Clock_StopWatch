import React from "react";
import "./ControlButtons.css";
  
export default function ControlButtons(props) {
  const StartButton = (
    <div className="butn btn-one btn-start"
         onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="butn btn-two" 
           onClick={props.handleReset}>
        Reset
      </div>
      <div className="butn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}