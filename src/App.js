import React, { useEffect, useContext } from "react"
import CountdownPage from "./components/CountdownPage"
import SetPomodoro from "./components/SetPomodoro"
import { SettingsContext } from "./context/SettingsContext"
import useLocalStorage from "use-local-storage"
import CircleButton from "./components/CircleButton"

const App = () => {
  const { pomodoro, executing, startAnimate, updateExecute } = useContext(SettingsContext)

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light")


  useEffect(() => {
    updateExecute(executing)
  }, [executing, startAnimate, updateExecute])

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }


  return (
    <div className="apply-font">
      <div className="container" data-theme={theme}>
        {pomodoro !== 0 ? <CountdownPage /> : <SetPomodoro />}
        <div className="circle-buttons">
          <CircleButton onClick={switchTheme} title= {theme === "light" ? "🌙" : "🔆"}/>
          <CircleButton onClick={switchTheme} title= {theme === "light" ? "🌙" : "🔆"}/>
        </div>
      </div>
    </div>
  )
}

export default App
