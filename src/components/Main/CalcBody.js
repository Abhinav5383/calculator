import React from 'react';
import './style.css'

function CalcBody() {
  return (
    <div className="calcContainer">
      <div className="calculator">
        <div className="buttons btnContainer">
          <h2 id="value">0</h2>
          <span className="clear c Delete" dataValue="C">C</span>
          <span className="Backspace x" dataValue="X">X</span>
          <span className="divide /" dataValue="/">/</span>
          <span className="multiply *" dataValue="*">*</span>
          <span className="seven 7" dataValue="7">7</span>
          <span className="eight 8" dataValue="8">8</span>
          <span className="nine 9" dataValue="9">9</span>
          <span className="minus -" dataValue="-">-</span>
          <span className="four 4" dataValue="4">4</span>
          <span className="five 5" dataValue="5">5</span>
          <span className="six 6" dataValue="6">6</span>
          <span className="add +" dataValue="+">+</span>
          <span className="one 1" dataValue="1">1</span>
          <span className="two 2" dataValue="2">2</span>
          <span className="three 3" dataValue="3">3</span>
          <span className="equal Enter =" dataValue="=">=</span>
          <span className="double-zero 00" dataValue="00">
            <p className="zero1" dataValue="0">0</p>
            <p className="zero2" dataValue="0">0</p>
          </span>
          <span className="zero 0" dataValue="0">0</span>
          <span className="point ." dataValue=".">.</span>
        </div>
      </div>
    </div>
  );
}

export default CalcBody
