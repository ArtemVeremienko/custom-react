import React, { useState } from 'react'
import PropTypes from 'prop-types'

const App = ({ min, max }) => {

  const [inputValue, setInputValue] = useState(min)
  const [prevValue, setPrevValue] = useState(min)

  const decrease = () => {
    const nextVal = inputValue - 1
    set(nextVal)
  }

  const increase = () => {
    const nextVal = inputValue + 1
    set(nextVal)
  }

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const set = (val) => {
    const value = Math.max(min, Math.min(max, val))
    setPrevValue(value)
    setInputValue(value)
  }

  const checkValue = () => {
    let value = parseInt(inputValue)
    set(isNaN(value) ? prevValue : value)
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