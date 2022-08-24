import { useState, useCallback } from "react"
import Road from "./component/Road"
import TextField from "./component/TextField"

import "./index.css"

const App = () => {
    console.log("App");
    const [inputText, setInputText] = useState(".")
    const [per, setPer] = useState(0)
    const setPercentValue = useCallback((state) => setPer(state))
    const type = ({target}) => {
        setInputText("."+target.value)
    }
    return (
        <div>
            <Road perValue={per}/>
            <TextField data={inputText} perValue={per} setPerValue={setPercentValue}/>
            <input type="text" onChange={type}/>
        </div>
    )
}

export default App;