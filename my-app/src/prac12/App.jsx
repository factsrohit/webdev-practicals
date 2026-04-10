import { useEffect, useState } from "react";
import './prac12/prac12.css'
function App() {
    const [data, setdata] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/getdata")
            .then(res => res.text())
            .then(result => setdata(result))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <p>data will be fetched below: </p>
            <h1 id='count'>{data}</h1>
        </>
    );
}

export default App;