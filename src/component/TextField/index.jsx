import { useState, useEffect, memo } from "react";
import { Box } from "./style"  

const TextField = ({data, perValue, setPerValue}) => {
    const loadText = () => {
        fetch("https://baconipsum.com/api/?type=meat-and-filler")
            .then((res) => res.json())
            .then((data) => setPatternText("."+data[0]))
    }
    console.log("TextField");
    const [patternText, setPatternText] = useState(".Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa nobis nemo ipsam autem quo, officiis doloremque. Dicta natus quibusdam ad ipsa voluptates, necessitatibus alias? Assumenda obcaecati hic velit! Est?")
    const [writtentTextLen, setWrittenTextLen] = useState(1)
    const [errors, setErrors] = useState(0)
    // const [time, setTime] = useState(0)

    const youWin = (errors, len) => {
        console.log(errors, len)
        alert(`Score: \n Errors: ${100+100*(errors/len-1)}%\n Accucary: ${-1*100*(errors/len-1)}%`)
        window.location.reload(false);
    }
    console.log(data, writtentTextLen);
    useEffect(() => {
        loadText()
    }, [])
    useEffect(() => {
        let test = data ? data[data.length-1] === patternText[data.length-1] : false
        if(test){
            if(data !== "." && document.getElementById(`ch${data.length-1}`).style.color !== "green") {
                document.getElementById(`ch${data.length-1}`).style.color = "green"
                if(data.length >= writtentTextLen){
                    data.length >= writtentTextLen && setWrittenTextLen(data.length)
                    if (perValue === 100) {
                        youWin(errors, data.length)
                    } else setPerValue(perValue+1)
                }
            }
            else if(data === ".") document.getElementById(`ch${data.length-1}`).style.color = "black"
        } else {
            document.getElementById(`ch${data.length-1}`).style.color = "red"
            setWrittenTextLen(data.length)
            setErrors(errors+1)
            // setPerValue(perValue-100/patternText.length)
        }
        console.log(data[data.length-1], patternText[data.length-1], test);
    }, [data])
    return (
        <Box>
            {
                patternText.split("").map((value, i) => {
                    return (
                        <span id={`ch${i}`} key={i}>{value}</span>
                    )
                })
            }
        </Box>
    )
}

export default memo(TextField);