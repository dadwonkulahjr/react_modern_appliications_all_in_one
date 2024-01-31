import Heading from "../Layout/Heading";
import Footer from "../Layout/Footer";
import Form from "../Form/Form";
import Student from "../Student/Student";
import StudentReview from "../Student/StudentReview";
import React from "react";

/**Convert to arrays functions!

//Converting now to class based components!
Dad S. Wonkulah Jr Jan 21, 2024
/** */
class MainBody extends React.Component{
   render(){
    return (
                <div style={{backgroundColor:"black",color:"gray", minHeight:"70vh"}} className="py-1">
                    <Heading/>
                    <p>In this course we are going to learn:</p>
                    <ul>
                        <li>Functional Components</li>
                        <li>Class Components</li>
                    </ul>
                    <Form/>
                    <div className="row m-2 container">Students Enrolled<hr/></div>
                    <Student 
                        name={"Precious K. Wonkulah"} 
                        experience={2} 
                        img_custom_url={"https://api.lorem.space/image/face?w=150&h=150"}
        
                        >
                    <StudentReview></StudentReview>
                    </Student>
                    <Student 
                    name={"Darius W. Faith"} 
                    experience={3} 
                    img_custom_url={"https://api.lorem.space/image/ai?w=150&h=150"}
        
                    >
                    <StudentReview></StudentReview>
                    </Student>
                    <Student 
                    name={"Dacious W. Rose"}
                    experience={1} 
                    img_custom_url={"https://api.lorem.space/image/face?w=150&h=150"}
        
                    >
        
                    </Student>
                    <Footer/>
                </div>
            ); 
   }
}
// const MainBody = () => {
//     return (
//         <div style={{backgroundColor:"black",color:"gray", minHeight:"70vh"}} className="py-1">
//             <Heading/>
//             <p>In this course we are going to learn:</p>
//             <ul>
//                 <li>Functional Components</li>
//                 <li>Class Components</li>
//             </ul>
//             <Form/>
//             <div className="row m-2 container">Students Enrolled<hr/></div>
//             <Student 
//                 name={"Precious K. Wonkulah"} 
//                 experience={2} 
//                 img_custom_url={"https://api.lorem.space/image/face?w=150&h=150"}

//                 >
//             <StudentReview></StudentReview>
//             </Student>
//             <Student 
//             name={"Darius W. Faith"} 
//             experience={3} 
//             img_custom_url={"https://api.lorem.space/image/ai?w=150&h=150"}

//             >
//             <StudentReview></StudentReview>
//             </Student>
//             <Student 
//             name={"Dacious W. Rose"}
//             experience={1} 
//             img_custom_url={"https://api.lorem.space/image/face?w=150&h=150"}

//             >

//             </Student>
//             <Footer/>
//         </div>
//     )
// }

export default MainBody;