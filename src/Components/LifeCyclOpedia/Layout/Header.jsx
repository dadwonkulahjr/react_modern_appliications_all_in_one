import logo from "../../../images/react_logo.png";
import Footer from "../Layout/Footer";
import StudentIndexFunc from "../Students/StudentIndexFunc";
import StudentIndex from "../Students/StudentIndex";

const Header = () => {
  return (
    <div
      className="container-fluid py-3"
      style={{
        backgroundColor: "black",
        minHeight: "85vh",
      }}
    >
      <img
        src={logo}
        style={{ width: "35px", verticalAlign: "top" }}
        alt=""
        className="img-fluid"
      />
      <span className="h2 text-white-50">LifeCyclOpedia</span>
      <div
        className="container-fluid mb-2"
        style={{ borderBottom: "1px solid white" }}
      ></div>
      <div className="row">
        <div className="col-6 col-md-6">
          <StudentIndex />
        </div>
        <div className="col-6 col-md-6">
          <StudentIndexFunc />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Header;
