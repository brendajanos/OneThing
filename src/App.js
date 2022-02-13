import React, { useEffect, useContext } from "react"
import CountdownPage from "./components/CountdownPage"
import SetPomodoro from "./components/SetPomodoro"
import { SettingsContext } from "./context/SettingsContext"

const App = () => {
  const {
    pomodoro,
    executing,
    startAnimate,
    updateExecute,
  } = useContext(SettingsContext)

  useEffect(() => {
    updateExecute(executing)
  }, [executing, startAnimate, updateExecute])

  return (
    <div className="container">
      {pomodoro !== 0 ? (
       <CountdownPage/>
      ) : (
        <SetPomodoro />
      )}
    </div>
  )
}

export default App
