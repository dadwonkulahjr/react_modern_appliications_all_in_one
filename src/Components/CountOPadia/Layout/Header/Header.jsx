import reactLogo from "../../../../images/react_logo.png";
// "../../../images/react_logo.png";

const Header = () =>{
    //variables
    return (
        <div style={{ backgroundColor: "black", textAlign:"right" }} >
          <img
            src={reactLogo}
            alt="REACT Course"
            className="img-fluid"
            style={{ height: "40px", verticalAlign: "top" }}
          />
          <span className="h1 pt-4 text-white-50">
            CountOpedia <i className="bi bi-emoji-smile-fill"></i> !
          </span>
          {/* <p>This course will be an exciting course.</p> */}
          <div className="count_Opedia_Custom_Header_style"></div>
        </div>
      );
}


export default Header;