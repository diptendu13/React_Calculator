import React, {useState, useRef} from "react";

const Calculator = () => {

    // 1. Using use-state hooks
    // 2. Validation function
    // 3. Operation function
    // 4. Writing the JSX
    // 5. Styling
    // 6. Deploying

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [message, setMessage] = useState(null);
    const [result, setResult] = useState(null);
    const inputRef = useRef(null);

    const validateInput = () => {
        if (input1 === ""){
            setMessage("Error!");
            setResult("Num1 Cannot Be Empty");
            return false;
        }
        else if (input2 === ""){
            setMessage("Error!");
            setResult("Num2 Cannot Be Empty");
            return false;
        }
        else if (isNaN(input1) || isNaN(input2)){
            setMessage("Error!");
            setResult("Please Enter Number As Inputs");
            return false;
        }
        setMessage("Success!");
        return true;
    }

    const getResult = (operation) => {

        if (validateInput()){
            if (operation === '+'){
                setResult(parseFloat(input1) + parseFloat(input2));
            }
            else if (operation === '-'){
                setResult(parseFloat(input1) - parseFloat(input2));
            }
            else if (operation === '*'){
                setResult(parseFloat(input1) * parseFloat(input2));
            }
            else {
                if (input2 !== '0'){
                    setResult(parseFloat(input1) / parseFloat(input2));
                }
                else {
                    setMessage("Error!")
                    setResult("Division By Zero Is Not Allowed!");
                }
            }
        }
    }

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type="text" ref={inputRef} placeholder="Num 1" value={input1} onChange={(e) => setInput1(e.target.value)} />
            <input type="text" value={input2} placeholder="Num 2" onChange={(e) => setInput2(e.target.value)} />
            <div className="button-wrapper">
                <button onClick={(e) => getResult(e.target.innerText)}>+</button>
                <button onClick={(e) => getResult(e.target.innerText)}>-</button>
                <button onClick={(e) => getResult(e.target.innerText)}>*</button>
                <button onClick={(e) => getResult(e.target.innerText)}>/</button>
                <button onClick={() => {
                    setInput1("");
                    setInput2("");
                    setMessage(null);
                    setResult(null);
                    inputRef.current.focus();
                }}>R</button>
            </div>
            <div className="message-wrapper">
                {message !== null && message === "Error!" ? <div className="error-message">{message}</div> : <div className="success-message">{message}</div>}
                {result !== null && <div className="result">Result : {result}</div>}
            </div>
        </div>
    )
}

export default Calculator;