import logo from "../../../images/react_logo.png";
const Header = () => {
  return (
    <div className="py-3" style={{ backgroundColor: "black", borderBottom:"1px solid #ddd"}}>
      <img
        src={logo}
        style={{ width: "35px", verticalAlign: "top" }}
        alt=""
        className="img-fluid"
      />
      <span
        className="h2 text-white-50"
        style={{ lineHeight: "-100px", marginLeft: "2px" }}
      >
        LifeCyclOpedia
      </span>
    </div>
  );
};
export default Header;