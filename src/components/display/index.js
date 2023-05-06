import React from "react";

export default function Display(props) {
  return (
    <div>
      <h3>Your prompt:</h3>
      <p>
        Hello, I am building a {props.building} using {props.language}. I am
        having trouble as {props.problem}.<br></br> {props.comment} <br></br>Please can you tell me
        why my current code might not be working, and suggest what I could do to
        rectify the problem?
      </p>{" "}
    </div>
  );
}
