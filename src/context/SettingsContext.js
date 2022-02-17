import { useState, createContext } from "react"

export const SettingsContext = createContext()

function SettingsContextProvider(props) {
  const [question, setQuestion] = useState("")
  const [pomodoro, setPomodoro] = useState(0)
  const [executing, setExecuting] = useState({})
  const [startAnimate, setStartAnimate] = useState(false)

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    })
    setTimerTime(executing)
  }

  function startTimer() {
    setStartAnimate(true)
  }

  function pauseTimer() {
    setStartAnimate(false)
  }

  function stopAnimate() {
    setStartAnimate(false)
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
  }

  const SettingsBtn = () => {
    setExecuting({})
    setPomodoro(0)
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings)
    setTimerTime(updatedSettings)
  }

  const setTimerTime = (timeAmount) => {
    switch (timeAmount.active) {
      case "work":
        setPomodoro(timeAmount.work)
        break
      case "short":
        setPomodoro(timeAmount.short)
        break
      case "long":
        setPomodoro(timeAmount.long)
        break
      default:
        setPomodoro(0)
        break
    }
  }

  return (
    <SettingsContext.Provider
      value={{
        question,
        setQuestion,
        pomodoro,
        executing,
        updateExecute,
        startAnimate,
        startTimer,
        pauseTimer,
        children,
        SettingsBtn,
        setCurrentTimer,
        stopAnimate,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider
