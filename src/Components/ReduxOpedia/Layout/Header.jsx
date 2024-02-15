import logo from "../../../images/react_logo.png";
import Footer from "./Footer";
import Counter from "../Counter/Counter";

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
      <span className="h2 text-white-50">ReduxOpedia</span>
      <div
        className="container-fluid mb-2"
        style={{ borderBottom: "1px solid gray" }}
      ></div>
      <div>
        <Counter />
      </div>
      <Footer />
    </div>
  );
};

export default Header;
