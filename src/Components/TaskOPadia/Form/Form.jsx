import React from "react";

/**Convert to arrays functions!

//Converting now to class based components!
Dad S. Wonkulah Jr Jan 21, 2024
/** */
class Form extends React.Component {
  render() {
    return (
      <div className="container border p-2 mb-2">
        <div className="row">
          <div className="col-12">
            Enter a text: <input type="text" placeholder="Enter a text..." />
            <button className="btn btn-primary">POST</button>
          </div>
        </div>
      </div>
    );
  }
}

// const Form = () => {
//     return (
//         <div className="container border p-2 mb-2">
//             <div className="row">
//                 <div className="col-12">
//                  Enter a text:   <input type="text" placeholder="Enter a text..."/>
//                  <button className="btn btn-primary">POST</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Form;
