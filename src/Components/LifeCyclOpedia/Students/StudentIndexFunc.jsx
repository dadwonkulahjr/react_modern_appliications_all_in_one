import React, { useEffect, useId, useRef, useState } from "react";
import { getRandomUsers } from "../../../Utilities/api";
import InstructorsFunc from "../Instructors/InstructorsFunc";

const StudentIndexFunc = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  const [inputName, setInputName] = useState(() => {
    return "";
  });

  const [inputFeedBack, setInputFeedBack] = useState(() => {
    return "";
  });

  //   const [totalRender, setTotalRender] = useState(0);
  const totalRender = useRef(0);
  const prevStudentCount = useRef(0);
  const feedBackInputRef = useRef(null);
  const id = useId();
  useEffect(() => {
    totalRender.current = totalRender.current + 1;
    // setTotalRender((prevState) => prevState + 1);
    console.log("render: " + totalRender.current);
  });

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUsers();
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUsers();
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    };
    if (prevStudentCount.current < state.studentCount) {
      getUser();
    } else if (prevStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return { ...prevState, studentList: [] };
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    console.log("Prev Count: " + prevStudentCount.current);
    console.log("Current Count: " + state.studentCount);
    prevStudentCount.current = state.studentCount;
    console.log("Prev Count: " + prevStudentCount.current);
    console.log("Current Count: " + state.studentCount);
  }, [state.studentCount]);

  useEffect(() => {
    feedBackInputRef.current.focus();
  }, []);

  //   constructor(props) {
  //     super(props);
  //     this.state = JSON.parse(localStorage.getItem("cyclOpediaState")) || {
  //       instructor: undefined,
  //       studentList: [],
  //       studentCount: 0,
  //       hideInstructor: false,
  //       inputName: "",
  //       inputFeedBack: "",
  //     };
  //   }
  //Very important lifeCycleMethod in REACT!
  //This method is called right after the RENDER Method
  //We used this method to initilized application state
  //   componentDidMount = async () => {
  //     if (JSON.parse(localStorage.getItem("cyclOpediaState"))) {
  //       this.setState(JSON.parse(localStorage.getItem("cyclOpediaState")));
  //     } else {
  //       const response = await getRandomUsers();
  //       console.log(response);
  //       this.setState((prevState) => {
  //         return {
  //           instructor: {
  //             name: response.data.first_name + " " + response.data.last_name,
  //             email: response.data.email,
  //             phone: response.data.phone_number,
  //           },
  //         };
  //       });
  //     }
  //   };
  //Very important lifeCycleMethod in REACT!
  //   componentDidUpdate = async (previousProps, previousState) => {
  //     console.log("StudentIndex Component did update!");
  //     localStorage.setItem("cyclOpediaState", JSON.stringify(this.state));
  //     console.log("Old state - " + previousState.studentCount);
  //     console.log("New state - " + this.state.studentCount);

  //     //Logic
  //     if (previousState.studentCount < this.state.studentCount) {
  //       const response = await getRandomUsers();
  //       this.setState((prevState) => {
  //         return {
  //           studentList: [
  //             ...prevState.studentList,
  //             {
  //               name: response.data.first_name + " " + response.data.last_name,
  //             },
  //           ],
  //         };
  //       });
  //     } else if (previousState.studentCount > this.state.studentCount) {
  //       this.setState((prevState) => {
  //         return {
  //           studentList: [],
  //         };
  //       });
  //     }
  //   };

  //Very important lifeCycleMethod in REACT!
  //   componentWillUnmount() {
  //     console.log("StudentIndex Component will unmount!");
  //   }

  //Events Functions
  const handleAddStudent = () => {
    setState((prevState) => {
      let newStudentCount = prevState.studentCount + 1;
      return {
        ...prevState,
        studentCount: newStudentCount,
      };
    });
  };

  const handleRemoveAllStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handleToggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  console.log("Render StudentIndex Class Component!");
  return (
    <>
      <div className="col-12 h2 text-warning">Student Func Component</div>
      <div className="p-3">
        <span className="h4 text-success">Instructor&nbsp;</span>
        <i
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          }
                btn btn-success btn-sm`}
          onClick={handleToggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <InstructorsFunc instructor={state.instructor} />
        ) : null}
        <div className="p-3 text-white">
          Total render: {totalRender.current}
        </div>
      </div>
      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          value={inputName}
          placeholder="Name..."
          id={`{${id}-inputName}`}
          onChange={(e) => setInputName(e.target.value)}
        ></input>{" "}
        <label className="text-white" htmlFor={`{${id}-inputName}`}>
          Value : {inputName}
        </label>
        <br />
        <textarea
          placeholder="Feedback..."
          ref={feedBackInputRef}
          id={`{${id}-inputFeedBack}`}
          onChange={(e) => setInputFeedBack(e.target.value)}
        ></textarea>{" "}
        <label className="text-white" htmlFor={`{${id}-inputFeedBack}`}>
          Feedback Value : {inputFeedBack}
        </label>
      </div>
      <div className="p-3 text-white">
        <span className="h4 text-success">Students</span>
        <br />
        <div>Student Count: {state.studentCount}</div>
        <button
          className="btn btn-success btn-sm mt-1"
          onClick={handleAddStudent}
        >
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm mt-1"
          onClick={handleRemoveAllStudent}
        >
          Remove All Student
        </button>
        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              - {student.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StudentIndexFunc;
