import "./App.css";
import React, { useEffect, useState } from "react";
import InputBox from "../input/index";
import Display from "../display/index";
import pic from "./HEADER.png"

function App() {
  const [language, setLanguage] = useState("");
  const [building, setBuilding] = useState("");
  const [problem, setProblem] = useState("");
  const [code, setCode] = useState("");
  const [hasComment, setHasComment] =useState(false)
  const [hasCode, setHasCode] =useState(false)
  const [hasBuilding, setHasBuilding] =useState(false)
  const [hasProblem, setHasProblem] =useState(false)
  const [hasLanguage, setHasLanguage] =useState(false)
  const [clicked, setClicked] = useState(false);
  const [explained, setExplained] = useState(false);
  const [lines, setLines] = useState(false);
  const [analogy, setAnalogy] = useState(false);
  const [comments, setComments] = useState("");
  const [needMore, setNeedMore] = useState(false);

  function languageChange(event) {
    let selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setHasLanguage(true)
  }

  function buildingValue(event) {
    let theyreBuilding = event.target.value;
    setBuilding(theyreBuilding);
    setHasBuilding(true)
  }

  function commentValue(event) {
    let theirComment = event.target.value;
    setComments(theirComment);
    setHasComment(true)
  }

  function problemValue(event) {
    let theirProblem = event.target.value;
    setProblem(theirProblem);
    setHasProblem(true)

  }

  function codeValue(event) {
    let theirCode = event.target.value;
    setCode(theirCode)
    setHasCode(true);
  }

  function reset() {
  setLanguage("")
setBuilding("")
 setProblem("")
setCode("")
   setClicked(false);
setExplained(false)
 setLines(false)
setAnalogy(false)
 setComments("")
setNeedMore(false)
setHasCode(false)
setHasComment(false)
setHasLanguage(false)
setHasProblem(false)
setHasBuilding(false)
  }

  function buttonClick() {
    if (code !== "" || comments !== "" || problem !== "" || building !== "") {
      setNeedMore(false);
      setClicked(true);
    } else setNeedMore(true);
    console.log(needMore);
  }

  function explainedSelected() {
    setExplained(true);
  }

  function linesSelected() {
    setLines(true);
  }

  function analogySelected() {
    setAnalogy(true);
  }
  return (
    <div className="App">
      <img className="headpic" src={pic} alt="header" />
      {!clicked&& <InputBox
        languageChange={languageChange}
        buildingValue={buildingValue}
        problemValue={problemValue}
        codeValue={codeValue}
        buttonClick={buttonClick}
        commentValues={comments}
        commentValue={commentValue}
        problemValues={problem}
        buildingValues={building}
        codeValues={code}
        languageValues={language}
        explained={explainedSelected}
        lines={linesSelected}
        analogy={analogySelected}
      />}
      {needMore && (
        <h3>
          Please fill in the required information so that we can help you!
        </h3>
      )}
      <div className="prompt">
    {clicked && <p>Hello</p>}
    {clicked && !hasBuilding && <p>I am building an application.</p>}
        {clicked && hasBuilding && <p>I am building a {building}.</p>}
        {clicked && hasLanguage && <p>I am using {language}.</p>}
        {clicked && hasProblem && <p>The issue that I'm facing is {problem}.</p>}
        {clicked && hasComment && <p>Please note that {comments}.</p>}
      {clicked && hasCode && <p>Here is my code: {code} END OF CODE</p>}
      {clicked && <p>Please can you tell me why my current code might not be working, and suggest what I could do to rectify the problem?</p>}
      {clicked && lines && (
        <p>Please highlight exactly which lines I need to change.</p>
      )}
      {clicked && analogy && (
        <p>
          Please explain the problem using a real world analogy that I will
          understand.
        </p>
      )}
      {clicked && explained && (
        <p>Please explain what the code is doing line by line</p>
      )}
      </div>
      <div className="buttons">
      {clicked && (
        <a href="https://chat.openai.com" alt="Open AI">
          <button class="button">Go to ChatGPT</button>
        </a>
      )}
      {clicked && (
          <button class="button" onClick={reset}>Go again</button>
      )}
      </div>
    </div>
  );
}

export default App;
