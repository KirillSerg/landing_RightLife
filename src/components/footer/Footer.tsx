import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const navTarget = [
    "informativa sulla privacy",
    "termine dell'utente",
    "tutti i diritti riservati",
  ];
  const activeNav = navTarget.find((nav) => nav === path[1]);

  return (
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            style={{ height: "7vh", marginLeft: "10px" }}
            src={logo}
            alt="logo"
          />
        </Link>
        <a href="tel:+393123456789">CALL: +39 312 345 6789</a>
      </div>

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

export default Footer;
