import { useState } from "react"

const ProgressBars = () => {

    const [progressValue,setProgressValue] = useState(0);

    const updateProgressValue = (value) => {
        setProgressValue(prev => Math.max(0,Math.min(100, prev + value)))
    }


    const getBarColor = () => {
        if(progressValue >= 80) return "green"
        if(progressValue >= 40) return "orange"
    return "red"
    }
    return (
        <div style={{maxWidth : "800px",margin : "auto",padding : "20px"}}>
            <h2>Progress Bar</h2>
            <div style={{width : "800px",height : "25px", backgroundColor : "#ddd", borderRadius : "8px",overflow : "hidden",position : "relative"}}>
              <div style={{width : `${progressValue}%`, height : "100%", backgroundColor : getBarColor(), transition : "width 0.3s ease-in-out"}}></div>
              <span style={{fontWeight : "bold",color : "#fff",position : "absolute",top : "0",left : "50%", transform : "translateX(-50%)"}}>{progressValue} %</span>
            </div>
        <div style={{ marginTop : "10px"}}>
        <buttton style={{border : "1px solid",padding : "2px 5px",marginRight : "10px",borderRadius : "3px"}} onClick={() => updateProgressValue(-10)}>-10%</buttton>
        <buttton style={{border : "1px solid",padding : "2px 5px", borderRadius : "3px"}} onClick={() => updateProgressValue(+10)}>+10%</buttton>
        </div>
        </div>
    )
}

export default ProgressBars