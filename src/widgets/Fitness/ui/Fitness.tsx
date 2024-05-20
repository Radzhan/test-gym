import style from "./Fitness.module.scss";
import image from "../../../shared/assets/Rectangle.jpg";
import { Logo } from "../../../features/Logo";

export const Fitness = () => {
  return (
    <div className={style.fitnessBlock}>
      <div className="container">
        <header className={style.header}>
          <Logo/>
          <p className={style.phone}>8-800-555-55-55</p>
        </header>

        <div className={style.fitnessInner}>
          <div className={style.fitnessInnerText}>
            <h3 className={style.city}>омск</h3>
            <div className={style.phrase}>
              <p>Тренажёрный зал Групповые занятия Кардио-зона </p>
              <h1>Фитнес центр</h1>
            </div>
            <button type="button" className={style.buyBtn}>Купить абонемент</button>
          </div>
          <img width='500px' height='556px' src={image} alt="fitness boy" className={style.fitnessImg}/>
        </div>
      </div>
    </div>
  );
};
