import React from "react";
// import {faker} from '@faker-js/faker';

/**Convert to arrays functions!

//Converting now to class based components!
Dad S. Wonkulah Jr Jan 21, 2024
/** */

class Student extends React.Component{
  render(){
    return (
      <div className="border mb-2 py-2 col-10 col-lg-4">
        <div className="row">
          <div className="col-2">
              <img src={this.props.img_custom_url}  className="float-end img-fluid py-2" alt={this.props.name}/>    
          </div>
          <div className="col-8">
              {this.props.name}
              <br/>
              Coding experienced {this.props.experience} years!
          </div>
          <div className="col-2">
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


// const Student = (props) => {
// //  const fullName = "Precious K. Wonkulah";
// //  const programmingExp = 1;
//   return (
//     <div className="border mb-2 py-2 col-10 col-lg-4">
//       <div className="row">
//         <div className="col-2">
//             <img src={props.img_custom_url}  className="float-end img-fluid py-2" alt={props.name}/>    
//         </div>
//         <div className="col-8">
//             {props.name}
//             <br/>
//             Coding experienced {props.experience} years!
//         </div>
//         <div className="col-2">
//             {props.children}
//         </div>
//       </div>
//     </div>
//   );
// }

export default Student;