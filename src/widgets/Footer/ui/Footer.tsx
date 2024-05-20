import style from "./Footer.module.scss";
import { Logo } from "../../../features/Logo";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={` container ${style.footerIn}`}>
        <Logo />
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li>Услуги</li>
            <li>Абонементы</li>
            <li>Акции</li>
            <li>Тренеры</li>
            <li>Расписание</li>
          </ul>
        </nav>
        <div className={style.socialMedia}>
          <a href="#" className={style.wk}></a>
          <a href="#" className={style.ig}></a>
          <a href="#" className={style.fb}></a>
        </div>
      </div>
    </footer>
  );
};
