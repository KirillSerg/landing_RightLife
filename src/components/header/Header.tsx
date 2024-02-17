import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const navTarget = ["blog", "contacts", "faq", "about"];
  const activeNav = navTarget.find((nav) => nav === path[1]);
  return (
    <div className={styles.wrap}>
      <Link to="/">
        <img style={{ height: "7vh" }} src={logo} alt="logo" />
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
            {nav}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
