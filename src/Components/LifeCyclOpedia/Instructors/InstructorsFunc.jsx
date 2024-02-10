import { useEffect } from "react";

const InstructorsFunc = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  //   componentDidMount = () => {
  //     console.log("Instructor Class - Did Mount");
  //   };

  //   componentDidUpdate = () => {
  //     console.log("Instructor Class - Did Update");
  //   };

  //   componentWillUnmount = () => {
  //     console.log("Instructor Class - Will Unmount");
  //   };
  useEffect(() => {
    return () => {
      console.log("Instructor - UNMOUNTED");
    };
  }, [props.instructor.name]);
  console.log("Instructor Class - Render!");
  return (
    <div className="text-white">
      Name: {props.instructor.name}
      <br />
      Email: {props.instructor.email}
      <br />
      Phone: {props.instructor.phone}
    </div>
  );
};

export default InstructorsFunc;
