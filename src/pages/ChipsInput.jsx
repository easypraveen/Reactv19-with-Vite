import React, { useState } from "react";
function ChipsInput() {

    const [chipName,setChipName] = useState("");
    const [chipList,setChipList] = useState([]);
    const handleKeyDown = (e) => {
      if(e.key === "Enter" && chipName.trim() !== ""){
        setChipList([...chipList, chipName.trim()]);
        setChipName("");
      }
    }

    function removeChip(indexToRemove){
        setChipList(chipList.filter((chip,index) => index !== indexToRemove))
    }

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px", border: "1px solid black" }}
        onChange={(e) => setChipName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
       <div style={{display : "flex"}}>
       {chipList.map((chip,index) => (
        <div style={{padding: "8px 4px",
            margin: "5px",
            backgroundColor: "#e0e0e0",
            borderRadius: "15px"}}>
            <span key={index}>{chip}
            </span>
            <button style={{margin : "0 5px", cursor : "pointer"}} onClick={() => removeChip(index)}>X</button>
        </div>
       ))}
       </div>
    </div>
  );
}

export default ChipsInput;