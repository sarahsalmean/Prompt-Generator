import React from "react";
import { useState } from "react";
import "./input.css";

export default function InputBox(props) {
  return (
    <div>
      <div>
        <h3 class="top">
          {" "}
          Having trouble with your code and can't figure out what the issue is?
          Answer the questions below and we'll generate you a prompt to ask
          ChatGPT what hte matter could be.
        </h3>
        <p class="question">Which programming language are you using?</p>
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
          <input type="radio" value="CSS" onClick={props.languageChange} /> CSS{" "}
        </label>
        <div>
          <p class="question">What are you building?</p>
          <input
            class="textbox"
            type="text"
            onChange={props.buildingValue}
            value={props.buildingValues}
          ></input>
        </div>
        <div>
          <p class="question">What is the problem?</p>
          <input
            class="textbox"
            type="text"
            onChange={props.problemValue}
            value={props.problemValues}
          ></input>
        </div>
        <div>
          <p class="question">
            Please paste the full code from the file that you're working from:
          </p>
          <input
            class="textbox"
            type="text"
            onChange={props.codeValue}
            value={props.codeValues}
          ></input>
        </div>
        <div>
          <p class="question">Any other comments?</p>
          <input
            class="textbox"
            type="text"
            onChange={props.commentValue}
            value={props.commentValues}
          ></input>
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
          Generate my prompt!
        </button>
      </div>
    </div>
  );
}
