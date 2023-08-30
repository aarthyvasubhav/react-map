import React from "react";
import Card from "./Card";
import emojies from "../emojies"

function loopCard(emojie){
return <Card 
key = {emojie.id}
emoji = {emojie.emoji}
name = {emojie.name}
desc = {emojie.meaning}
/>
}

const getMean = emojies.map(function (emojie){
    return <p>{emojie.meaning.substring(0,100)}</p>
});


console.log(getMean);



function App(){
    return <div>
    <h1>EMOJIES Meaning</h1>
    <dl className="dictionary">
    {emojies.map(loopCard)}
    </dl>
    <p>{getMean}</p>
    </div>
}

export default App;