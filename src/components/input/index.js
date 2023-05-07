import React from "react";
import { useState } from "react";
import "./input.css";

export default function InputBox(props) {
  return (
    <div>
      <div>
        <h4 class="top">
          {" "}
          Having trouble with your code and can't figure out what the issue is?
          <br></br>
          <br></br>
          Answer the questions below and we'll generate you a prompt to ask
          your chosen AI what the matter could be.
          <br></br>
          <br></br>
          You don't need to fill out every section, but we recommend completing at least two of them.
          <br></br>
        </h4>
        <p class="question">Which programming language do you think the problem is occurring in?</p>
        <div class="languages">
        <label>
          <input
            type="radio"
            value="Javascript"
            onClick={props.languageChange}
          />
          Javascript 
        </label>
        <label>
          <input type="radio" value="HTML" onClick={props.languageChange} />{" "}
          HTML 
        </label>
        <label>
          <input type="radio" value="CSS" onClick={props.languageChange} /> CSS {" "}
        </label>
        </div>
        <div>
          <p class="question">
          <br></br>What are you building?</p>
          <h5><i>For example: "quiz app"</i></h5>
          <textarea
            class="textbox"
            type="text"
            onChange={props.buildingValue}
            value={props.buildingValues}
          ></textarea>
        </div>
        <div>
          <p class="question">What is the problem?</p>
          <h5><i>For example: "I am trying to map through an entire array, however it is only going up to a certain index"</i></h5>
          <textarea
            class="textbox"
            type="text"
            onChange={props.problemValue}
            value={props.problemValues}
          ></textarea>
        </div>
        <div>
          <p class="question">
            Please paste the relevant code from the file(s) that you're working from:
          </p>
          <textarea
            class="textbox"
            type="text"
            onChange={props.codeValue}
            value={props.codeValues}
          ></textarea>
        </div>
        <div>
          <p class="question">Any other comments?</p>
          <h5><i>Leave blank if not</i></h5>
          <textarea
            class="textbox"
            type="text"
            onChange={props.commentValue}
            value={props.commentValues}
          ></textarea>
        </div>
        <div class="boxes">
          <p class="question">Tick all that apply:</p>
          <label>
            <input
              type="checkbox"
              value="wantsExplained"
              onClick={props.explained}
            />{" "}
            I would like the solution explained line by line
          </label>
          <label>
            <input
              type="checkbox"
              value="wantsHighlighted"
              onClick={props.lines}
            />{" "}
            I would like chatGPT to highlight which specific lines need changed{" "}
          </label>
          <label>
            <input
              type="checkbox"
              value="wantsAnalogy"
              onClick={props.analogy}
            />{" "}
            I would like the solution explained in basic terms, using a real
            world analogy
          </label>
        </div>
        <button class="button" onClick={props.buttonClick}>
          Generate
        </button>
      </div>
    </div>
  );
}
