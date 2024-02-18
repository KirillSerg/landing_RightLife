import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const navTarget = ["", "contatti", "faq", "informazioni"];
  const activeNav = navTarget.find((nav) => nav === path[1]);
  return (
    <div className={styles.wrap}>
      <Link to="/">
        <img
          style={{ height: "7vh", marginLeft: "10px" }}
          src={logo}
          alt="logo"
        />
      </Link>
      <nav>
        {navTarget.map((nav) => (
          <Link
            key={nav}
            to={`/${nav}`}
            className={`${styles.nav_link} ${
              nav === activeNav ? styles.active : ""
            }`}
          >
            {nav || "blog"}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
