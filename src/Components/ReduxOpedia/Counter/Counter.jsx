import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "../../../redux/slice/counterSlice";
import { useState } from "react";
import DestinationList from "../Destination/DestinationList";
import DestinationDetails from "../Destination/DestinationDetails";
import ResetApp from "../ResetApp";
const Counter = () => {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState(10);
  return (
    <div className="row m-1">
      <ResetApp />
      <div className="text-center h3">Counter : {count}</div>
      <div className="col-6 mt-5 offset-lg-1 border" style={{ width: "500px" }}>
        <div className="text-center text-success h4">Basic Counter</div>
        <div className="col text-center m-2">
          <button
            className="btn btn-primary mt-1 mb-2 py-2"
            onClick={() => dispatch(increment())}
          >
            <i className="bi bi-plus-circle-fill"></i> Add
          </button>
          &nbsp; &nbsp;
          <button
            className="btn btn-danger mt-1 mb-2"
            onClick={() => dispatch(decrement())}
          >
            <i className="bi bi-trash-fill"></i> Remove
          </button>
        </div>
      </div>
      &nbsp; &nbsp;&nbsp;
      <div className="col-6 border mt-5" style={{ width: "500px" }}>
        <div className="text-center text-success h4">Multiplier Counter</div>
        <div className="row">
          <div className="col-4 p-1">
            <input
              type="text"
              placeholder="multiplier..."
              className="form-control mt-2"
              value={multiplier}
              onChange={(e) => setMultiplier(e.target.value)}
            ></input>
          </div>
          <div className="col-4 p-1">
            <button
              className="btn btn-primary mt-2 mb-2  form-control"
              onClick={() => dispatch(incrementMultiplier(multiplier))}
            >
              <i className="bi bi-plus-circle-fill"></i> Add
            </button>
          </div>
          <div className="col-4 p-1">
            <button
              className="btn btn-danger mt-2 mb-2 form-control"
              onClick={() => dispatch(decrementMultiplier(multiplier))}
            >
              <i className="bi bi-trash-fill"></i> Remove
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 text-primary mt-3 border " style={{ width: "" }}>
        <div className="col text-center h3 text-success">Destination List</div>
        <DestinationList />
        <DestinationDetails />
      </div>
    </div>
  );
};

export default Counter;
