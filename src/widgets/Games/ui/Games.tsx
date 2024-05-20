import style from "./Games.module.scss";
import pushUp from "../../../shared/assets/push-up.jpg";

export const Games = () => {
  return (
    <div className={`${style.gamesBlock} container `}>
      <div className={style.superGame}>
        <div className={style.superGameText}>
          <h3>SUPER GAMES</h3>
          <div className={style.date}>
            <div className={style.day}>
              <p className={style.dayIn}>Дата</p>
              <div className={style.dateIn}>
                <b>7</b>
                <div>
                  <p>Марта</p>
                  <p>2019</p>
                </div>
              </div>
            </div>
            <div className={style.time}>
              <b>Время</b>
              <p>12:00</p>
            </div>
          </div>
        </div>
        <p className={style.cross}>Ежегодные соревнования по CrossFit</p>
        <button>заполнить заявку</button>
      </div>

      <img src={pushUp} alt="push up" />
    </div>
  );
};
