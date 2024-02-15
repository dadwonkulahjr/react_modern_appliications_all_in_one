import { useSelector, useDispatch } from "react-redux";
import { destinationClicked } from "../../../redux/slice/destinationSlice";

const DestinationList = () => {
  const destinationList = useSelector(
    (state) => state.destinationStore.destination
  );
  const dispatch = useDispatch();
  //   console.log(destinationList);
  return destinationList.map((destination, index) => {
    return (
      <div
        className="text-center text-white row"
        style={{ borderBottom: "1px solid #333" }}
        key={index}
      >
        <div className="col-8 col-md-3 offset-5 pt-2">{destination.name}</div>
        <div className="col-4 col-md-2">
          <button
            className="btn btn-success form-control m-1"
            onClick={() => dispatch(destinationClicked(destination))}
          >
            Details
          </button>
        </div>
      </div>
    );
  });
};

export default DestinationList;
