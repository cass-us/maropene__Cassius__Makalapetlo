import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { SiEagle } from "react-icons/si";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Resume", to: "/resume" },
  { label: "Contacts", to: "/contacts" },
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
          <Link to={"/"} className="navBar__container__logo">
            <SiEagle size={30} />
          </Link>
        </div>
        <ul className={`navBar__container__menu ${toggleicon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navBar__container__menu__item">
              <Link
                className="navBar__container__menu__item__links"
                to={item.to}
                onClick={() => setToggleIcon(false)} // Close the menu when an item is clicked
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav__icon" onClick={HandleToggleIcon}>
          {toggleicon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
