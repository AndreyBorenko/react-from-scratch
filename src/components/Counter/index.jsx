import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Counter({ defaultStep = 1 }) {
  const [count, setCount] = useState(1);
  const [mode, setMode] = useState(true);
  const [step, setStep] = useState(defaultStep);

  const setStepValue = (value) => {
    if (value < 1) {
      setStep(1);
    } else if (value > 100) {
      setStep(100);
    } else {
      setStep(value);
    }
  };

  const onStepChange = ({ target: { value } }) => setStepValue(+value);
  const setCountValue = (value) => setCount(value);

  const increment = () => setCountValue(count + step);
  const decrement = () => setCountValue(count - step);

  const changeMode = () => setMode(!mode);

  return (
    <div>
      <div>count:{count}</div>
      <div>step:{step}</div>
      <input
        value={step}
        onChange={onStepChange}
        type="number"
        placeholder="enter step"
      />
      <button onClick={mode ? increment : decrement}>Step add</button>
      <button onClick={changeMode}>Mode</button>
    </div>
  );
}

Counter.propTypes = {
  defaultStep: PropTypes.number,
};

export default Counter;
