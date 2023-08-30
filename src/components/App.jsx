import React from "react";
import Card from "./Card";
import emojies from "../emojies"

function App(){
    return <div>
    <h1>EMOJIES Meaning</h1>
    <dl className="dictionary">
    {emojies.map(emojie => (
        <Card key = {emojie.id} emoji = {emojie.emoji} name = {emojie.name} desc = {emojie.meaning}/>
    ))}
    </dl>
    <p>{emojies.map(emojie =>  <p>{emojie.meaning.substring(0,100)}</p>)}</p>
    </div>
}

export default App;