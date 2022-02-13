import React, { useContext, useState } from "react"
import { SettingsContext } from "../context/SettingsContext"

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 30,
    short: 5,
    long: 15,
    active: "work",
  })

  const { updateExecute, setQuestion } = useContext(SettingsContext)

  const handleChange = (input) => {
    const { name, value } = input.target
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        })
        break
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        })
        break
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        })
        break
      case "question":
        setQuestion(value)
        break
      default:
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    updateExecute(newTimer)
  }
  return (
    <>
      <h1>The One Thing</h1>
      <div className="form-container">
        <form noValidate onSubmit={handleSubmit}>
          <input
            className="input"
            spellCheck="false"
            type="text"
            placeholder="Type your focus question!"
            name="question"
            onChange={handleChange}
          />
          <div className="input-wrapper">
            <input
              className="circle-input"
              type="number"
              name="work"
              onChange={handleChange}
              value={newTimer.work}
            />
            <input
              className="circle-input"
              type="number"
              name="shortBreak"
              onChange={handleChange}
              value={newTimer.short}
            />
            <input
              className="circle-input"
              type="number"
              name="longBreak"
              onChange={handleChange}
              value={newTimer.long}
            />
          </div>
          <button type="submit" secondary>
            Set Timer
          </button>
        </form>
      </div>
    </>
  )
}

export default SetPomodoro
