import { useState } from "react";
import './prac11/prac11.css'
function App() {
    const [count, setcount] = useState(0);

    function increase() {
        let currentcount = count;
        currentcount++;
        setcount(currentcount);
    }

    function decrease() {
        let currentcount = count;
        currentcount--;
        setcount(currentcount);
    }

    function reset() {
        setcount(0);
    }

    return (
        <>
            <h1 id='count'>counter : {count}</h1>

            <button id='inc' onClick={increase}>increase</button>
            <button id='dec' onClick={decrease}>decrease</button>
            <button id='reset' onClick={reset}>reset</button>
        </>
    );
}

export default App;