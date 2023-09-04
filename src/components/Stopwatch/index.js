// Write your code here
import {Component} from 'react'
import './index.css'

const initialState = {
  isTimerRunning: false,
  timerInMinutes: 0,
  timerInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  timer = () => {
    const {timerInMinutes, timerInSeconds} = this.state

    const updateMinutes =
      timerInMinutes > 9 ? timerInMinutes : `0${timerInMinutes}`
    const updatedSeconds =
      timerInSeconds > 9 ? timerInSeconds : `0${timerInSeconds}`

    return `${updateMinutes}:${updatedSeconds}`
  }

  clearInterval = () => {
    clearInterval(this.intervalId)
  }

  increment = () => {
    const {timerInSeconds, timerInMinutes} = this.state
    if (timerInSeconds === 59) {
      this.setState({timerInSeconds: 0})
      this.setState({timerInMinutes: timerInMinutes + 1})
    } else {
      this.setState({timerInSeconds: timerInSeconds + 1})
    }
  }

  onStartTimer = () => {
    this.setState({isTimerRunning: true})
    this.intervalId = setInterval(this.increment, 1000)
  }

  onStopTimer = () => {
    this.clearInterval()
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    this.clearInterval()
    this.setState(initialState)
  }

  render() {
    const {timerInSeconds, isTimerRunning} = this.state
    console.log(timerInSeconds)
    const isDisable = isTimerRunning
    console.log(isDisable)
    return (
      <div className="bg-container">
        <div className="timer-container">
          <h1>Stopwatch</h1>
          <div className="timer-details">
            <div className="image-title">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p>Timer</p>
            </div>
            <h1 className="timer-font">{this.timer()}</h1>
            <div className="button-container">
              <button
                type="button"
                className="btn1"
                onClick={this.onStartTimer}
                disabled={isDisable}
              >
                Start
              </button>
              <button type="button" className="btn2" onClick={this.onStopTimer}>
                Stop
              </button>
              <button
                type="button"
                className="btn3"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
