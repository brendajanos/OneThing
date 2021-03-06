import React, { useContext, useState } from "react"
import { SettingsContext } from "../context/SettingsContext"
import FontComponent from "./Fonts"
import Button from "./Button"

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 10,
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
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            spellCheck="false"
            type="text"
            placeholder="Type your focus question!"
            name="question"
            onChange={handleChange}
            minLength={4}
            required
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
          <Button type="submit" primary title="Set Timer">
            Set Timer
          </Button>
        </form>
        <FontComponent />
      </div>
    </>
  )
}

export default SetPomodoro
