import React, {useState} from 'react'

function Counter(props) {
  const [initialCount, setInitialCount] = useState(1)
  const [step, setStep] = useState(1)

  const increment = () =>
    setStep(step + 1)
  
  const decrement = () =>
    setStep(step - 1)
  
  const calculate = () =>
    setInitialCount(initialCount + step)

  return(
    <div>
      <div>{initialCount}</div>
      <div>{step}</div>
      <button onClick={increment}>+step</button>
    </div>
  )
}

export default Counter;
