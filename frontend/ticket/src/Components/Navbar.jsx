import { NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";
const links = [
  { path: "/", title: "HOME" },
  { path: "/register", title: "REGISTER" },
  { path: "/login", title: "LOGIN" }

];

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "40px",
        width: "auto",
        padding: "10px",
        alignItems: "center",
        textDecoration: "none",
        backgroundColor: "grey",
        borderRadius: "5px",
        fontSize: "1.5rem",
        color: "white",
      }}
    >
      {links.map((ele) => {
        return (
          <NavLink
            to={ele.path}
            key={ele.title}
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
          >
            {ele.title}
          </NavLink>
        );
      })}
   
      {/* <NavLink to="/">TodoItem</NavLink> */}
    </div>
  );
};
export default Navbar;
