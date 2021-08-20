import React, { useState } from "react";
import ReactDOM from "react-dom";


const Button=(props)=>{
    
    return <button onClick={props.handleClick}>{props.text}</button>;
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [index,setIndex]=useState(2);
  const [points,setPoints]= useState([1,3,4,2,0,0])
  
  const calcRandom=()=>{
        const xx=Math.floor(Math.random() * (anecdotes.length-1)) + 1;
        setSelected(xx);
  }

  const setVote=(selected)=>{
    const copy = [ ...points ]
    copy[selected] += 1
    setPoints(copy)

    let result = Math.max.apply(null, copy);
    setIndex(copy.indexOf(result))
    console.log(copy)
  }

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={()=>{setVote(selected)}} text={"Vote"} />
      <Button handleClick={calcRandom} text={"Next Anecdote"} />
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[index]}</p>
      <p>has {points[index]} votes</p>
    </div>
  );
};

//const points = { 0: 1, 1: 3, 2: 4, 3: 2, 4: 0 }
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
