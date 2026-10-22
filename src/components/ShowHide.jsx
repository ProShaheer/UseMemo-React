import { useState } from "react";



function ShowHide() {

     const [show, setShow] = useState(false)

    console.log(show);
    return (
        <>
        <div>
            <button onClick={() => setShow(!show)}>{show ? "Hide message" : "Show message"}</button>
            {show && <p>Hello, I am learning React!</p>}
        </div>
        </>       
    );
}

export default ShowHide;