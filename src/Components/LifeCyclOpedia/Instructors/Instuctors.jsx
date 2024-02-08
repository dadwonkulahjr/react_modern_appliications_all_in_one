import React from "react";

class Instructors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () =>{
    console.log("Instructor Class - Did Mount");
  };

  componentDidUpdate = () =>{
    console.log("Instructor Class - Did Update");
  };

  componentWillUnmount = () =>{
    console.log("Instructor Class - Will Unmount");
  };

  render() {
    console.log("Instructor Class - Render!");
    return (
      <div className="text-white">
        Name: {this.props.instructor.name}
        <br />
        Email: {this.props.instructor.email}
        <br />
        Phone: {this.props.instructor.phone}
      </div>
    );
  }
}

export default Instructors;
