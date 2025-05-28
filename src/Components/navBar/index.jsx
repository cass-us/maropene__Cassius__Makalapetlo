import { useState } from "react";
import { SiEagle } from "react-icons/si";
import {
  FaBars,
  FaHome,
  FaUserAlt,
  FaTools,
  FaProjectDiagram,
  FaEnvelope
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
  { label: "Home", to: "/", icon: <FaHome /> },
  { label: "About Me", to: "/about", icon: <FaUserAlt /> },
  { label: "Skills", to: "/skills", icon: <FaTools /> },
  { label: "Project", to: "/project", icon: <FaProjectDiagram /> },
  { label: "Contacts", to: "/contacts", icon: <FaEnvelope /> },
];

const NavBar = () => {
  const [toggleicon, setToggleIcon] = useState(false);

  const HandleToggleIcon = () => {
    setToggleIcon(!toggleicon);
  };

  return (
    <div>
      <nav className="navBar">
        <div className="navBar__container">
          <Link to={"/"} className="navBar__container__logo" aria-label="Home">
            <SiEagle size={30} />
          </Link>
        </div>

        <ul className={`navBar__container__menu ${toggleicon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navBar__container__menu__item">
              <Link
                className="navBar__container__menu__item__links"
                to={item.to}
                onClick={() => setToggleIcon(false)}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav__icon" onClick={HandleToggleIcon} aria-label="Toggle Menu">
          {toggleicon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
