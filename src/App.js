import React, { useEffect, useContext } from "react"
import CountdownPage from "./components/CountdownPage"
import SetPomodoro from "./components/SetPomodoro"
import { SettingsContext } from "./context/SettingsContext"
import useLocalStorage from "use-local-storage"
import Demo from "./components/Fonts";


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
    <div className="container" data-theme={theme}>
      {pomodoro !== 0 ? <CountdownPage /> : <SetPomodoro />}
      <button className="toggle" onClick={switchTheme}>{theme === "light" ? "🌙" : "🔆"}</button>
    </div>
  )
}

export default App
