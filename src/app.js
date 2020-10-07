import React, { useState } from 'react'
import PropTypes from 'prop-types'

const App = ({ min, max }) => {

  const [current, setCurrent] = useState(min)
  const [inputValue, setInputValue] = useState(min)

  const decrease = () => {
    const nextCurrent = current - 1
    set(nextCurrent)
  }

  const increase = () => {
    const nextCurrent = current + 1
    set(nextCurrent)
  }

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const set = (val) => {
    const value = Math.max(min, Math.min(max, val))
    setCurrent(value)
    setInputValue(value)
  }

  const checkValue = () => {
    let value = parseInt(inputValue)
    set(isNaN(value) ? min : value)
  }

  const checkEnterPress = ({ key }) => {
    if (key === 'Enter') checkValue()
  }

  return (
    <div>
      <button type="button" onClick={decrease}>-</button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        onBlur={checkValue}
        onKeyUp={checkEnterPress} />
      <button type="button" onClick={increase}>+</button>
    </div >
  )

}

App.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default App