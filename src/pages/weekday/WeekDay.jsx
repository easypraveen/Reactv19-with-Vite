import React, { useState } from 'react';
import "./weekDay.css";

export default function GetWeekday() {

  const [inputDate, setInputDate] = useState("")
  const [weekDay, setWeekDay] = useState("")

  const findDay = () => {
    if(!inputDate) return
    const date = new Date(inputDate)
    const day = date.toLocaleDateString('en-US', { weekday: 'long' })
    setWeekDay(day)
  }

  return (
    <div className="container">
      <h1>Get Weekday</h1>
      <input
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        data-testid="date-input"
      />
      <button data-testid="find-day-btn" onClick={findDay}>
        Find Day
      </button>
      {weekDay && <p className="result" data-testid="result">That date falls on {weekDay}!</p>}
    </div>
  );
}
