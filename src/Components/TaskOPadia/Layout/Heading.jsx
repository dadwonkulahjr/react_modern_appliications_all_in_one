import reactLogo from "../../../images/react_logo.png";
import React from "react";

/**Convert to arrays functions!

//Converting now to class based components!
Dad S. Wonkulah Jr Jan 21, 2024
/** */

class Heading extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <img
          src={reactLogo}
          alt="REACT Course"
          className="img-fluid"
          style={{ height: "35px", verticalAlign: "top" }}
        />
        <span className="h2 pt-4 text-white-50">
          REACT COURSE - TaskOPadia!
        </span>
        <p>This course will be an exciting course.</p>
      </div>
    );
  }
}
// const Heading = () => {
//     return (
//     <div style={{backgroundColor:"black"}}>
//      <img src={reactLogo} alt="REACT Course" className="img-fluid" style={{height:"35px", verticalAlign:"top"}}/>
//      <span className="h2 pt-4 text-white-50">REACT COURSE - TaskOPadia!</span>
//      <p>This course will be an exciting course.</p>
//     </div>

//     );
// }

export default Heading;
