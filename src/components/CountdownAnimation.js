import { useContext } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { SettingsContext } from "../context/SettingsContext"

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAnimate } = useContext(SettingsContext)

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={"#6D7CFF"}
      strokeWidth={6}
      size={220}
      trailColor="white"
      onComplete={() => {
        stopAnimate()
      }}
    >
      {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation
