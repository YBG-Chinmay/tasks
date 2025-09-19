import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 className="heading">
                This is a header
            </h1>
            Hello World
            Chinmay Agrawal
            <div>
                <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
            </div>
            <img src="../src/assets/cutecat.jpeg" alt="Cute Cat" />
            <div>Ordered List:</div>
            <ol style={{ backgroundColor: "red" }}>
                <li>First thing</li>
                <li>Second thing</li>
                <li>A third item</li>
            </ol>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;