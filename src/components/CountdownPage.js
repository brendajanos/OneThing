import React, { useContext } from "react"
import Button from "./Button"
import CountdownAnimation from "./CountdownAnimation"
import { SettingsContext } from "../context/SettingsContext"

const CountdownPage = () => {
  const {
    question,
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext)

  return (
    <>
      <h3>The One Thing</h3>
      <h1>{question}</h1>
      <ul className="labels">
        <li>
          <Button
            title="Work"
            activeClass={executing.active === "work" ? "active-label" : undefined}
            onClick={() => setCurrentTimer("work")}
          />
        </li>
        <li>
          <Button
            title="Short Break"
            activeClass={executing.active === "short" ? "active-label" : undefined}
            onClick={() => setCurrentTimer("short")}
          />
        </li>
        <li>
          <Button
            title="Long Break"
            activeClass={executing.active === "long" ? "active-label" : undefined}
            onClick={() => setCurrentTimer("long")}
          />
        </li>
      </ul>
      <Button primary title="Settings" onClick={SettingsBtn} />
      <div className="timer-container">
        <div className="time-wrapper">
          <CountdownAnimation key={pomodoro} timer={pomodoro} animate={startAnimate}>
            {children}
          </CountdownAnimation>
        </div>
      </div>
      <div className="button-wrapper">
        <Button
          primary
          title="Start"
          activeClass={!startAnimate ? "active" : undefined}
          onClick={startTimer}
        />
        <Button
          primary
          title="Pause"
          activeClass={startAnimate ? "active" : undefined}
          onClick={pauseTimer}
        />
      </div>
    </>
  )
}

export default CountdownPage
