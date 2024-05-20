import { Link } from "react-router-dom";
import style from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link className={style.logo} to="/">
      Supergym
    </Link>
  );
};
