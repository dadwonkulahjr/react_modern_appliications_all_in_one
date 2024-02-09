import { useState } from "react";

const Counter = () => {
  const [counterState, setCounterState] = useState(() => {
    return { counter: 10 };
  });

  const [titleState] = useState(() => {
    return { title: "Awesome Fun" };
  });

  function incrementCounter() {
    setCounterState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }

  function decrementCounter() {
    setCounterState((prevState) => {
      return { counter: prevState.counter - 1 };
    });
  }

  return (
    <div className="border text-center col-12 col-md-4 offset-md-4">
      <span className="text-white-50 h2 pt-4 m-2">
        {titleState.title} Counter
        <br />
        <button className="btn btn-success mt-1" onClick={incrementCounter}>
          +1
        </button>
        &nbsp;
        <button className="btn btn-danger mt-1" onClick={decrementCounter}>
          -1
        </button>
        <br />
        <span className="h4 text-white">
          Counter: &nbsp;
          <span className="text-success">{counterState.counter}</span>
        </span>
      </span>
    </div>
  );
};

export default Counter;
