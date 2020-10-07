import React, { useState } from 'react'
import PropTypes from 'prop-types';

const App = ({ min, max }) => {

  const [current, setCurrent] = useState(min)

  const decrease = () => {
    const nextCurrent = current - 1
    if (nextCurrent < min) return;
    setCurrent(nextCurrent)
  }

  const increase = () => {
    const nextCurrent = current + 1
    if (nextCurrent > max) return;
    setCurrent(nextCurrent + 1)
  }

  const handlerInput = (e) => {
    const value = parseInt(e.target.value);
    console.log(value)
    if (!value || value < min || value > max) return;
    setCurrent(value);
  }

  return (
    <div>
      <button type="button" onClick={decrease}>-</button>
      <input type="text" value={current} onChange={handlerInput} />
      <button type="button" onClick={increase}>+</button>
    </div >
  )

}

App.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
}

export default App