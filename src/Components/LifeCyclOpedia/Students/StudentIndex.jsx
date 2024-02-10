import React from "react";
import { getRandomUsers } from "../../../Utilities/api";
import Instructors from "../Instructors/Instuctors";

class StudentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cyclOpediaState")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedBack: "",
    };
  }
  //Very important lifeCycleMethod in REACT!
  //This method is called right after the RENDER Method
  //We used this method to initilized application state
  componentDidMount = async () => {
    if (JSON.parse(localStorage.getItem("cyclOpediaState"))) {
      this.setState(JSON.parse(localStorage.getItem("cyclOpediaState")));
    } else {
      const response = await getRandomUsers();
      console.log(response);
      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };
  //Very important lifeCycleMethod in REACT!
  componentDidUpdate = async (previousProps, previousState) => {
    console.log("StudentIndex Component did update!");
    localStorage.setItem("cyclOpediaState", JSON.stringify(this.state));
    console.log("Old state - " + previousState.studentCount);
    console.log("New state - " + this.state.studentCount);

    //Logic
    if (previousState.studentCount < this.state.studentCount) {
      const response = await getRandomUsers();
      this.setState((prevState) => {
        return {
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    } else if (previousState.studentCount > this.state.studentCount) {
      this.setState((prevState) => {
        return {
          studentList: [],
        };
      });
    }
  };

  //Very important lifeCycleMethod in REACT!
  componentWillUnmount() {
    console.log("StudentIndex Component will unmount!");
  }

  //Events Functions
  handleAddStudent = () => {
    this.setState((prevState) => {
      let newStudentCount = prevState.studentCount + 1;
      return {
        studentCount: newStudentCount,
      };
    });
  };

  handleRemoveAllStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };

  handleToggleInstructor = () => {
    this.setState((prevState) => {
      return {
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  render() {
    console.log("Render StudentIndex Class Component!");
    return (
      <>
        <div className="col-12 h2 text-warning">
          Student Class based Component
        </div>
        <div className="p-3">
          <span className="h4 text-success">Instructor&nbsp;</span>
          <i
            className={`bi ${
              this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
            }
                btn btn-success btn-sm`}
            onClick={this.handleToggleInstructor}
          ></i>
          {!this.state.hideInstructor && this.state.instructor ? (
            <Instructors instructor={this.state.instructor} />
          ) : null}
        </div>
        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            value={this.state.inputName}
            placeholder="Name..."
            onChange={(e) => this.setState({ inputName: e.target.value })}
          ></input>{" "}
          <span className="text-white">Value : {this.state.inputName}</span>
          <br />
          <textarea
            placeholder="Feedback..."
            onChange={(e) => this.setState({ inputFeedBack: e.target.value })}
          ></textarea>{" "}
          <span className="text-white">
            Feedback Value : {this.state.inputFeedBack}
          </span>
        </div>
        <div className="p-3 text-white">
          <span className="h4 text-success">Students</span>
          <br />
          <div>Student Count: {this.state.studentCount}</div>
          <button
            className="btn btn-success btn-sm mt-1"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm mt-1"
            onClick={this.handleRemoveAllStudent}
          >
            Remove All Student
          </button>
          {this.state.studentList.map((student, index) => {
            return (
              <div className="text-white" key={index}>
                - {student.name}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default StudentIndex;
