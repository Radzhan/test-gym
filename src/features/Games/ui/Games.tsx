import style from "./Games.module.scss";
import  pushUp  from '../../../shared/assets/push-up.jpg';

export const Games = () => {
  return <div className={`container ${style.gamesBlock}`}>
    <div className={style.superGame}>
        <div className={style.superGameText}>
            <h3>SUPER GAMES</h3>
            <div className={style.data}>
                <div className={style.day}>
                    <p>Дата</p>
                    <p>7</p>
                    <span>Марта 2019</span>
                </div>
                <div className={style.time}>
                    <p>Время</p>
                    <p>12:00</p>
                </div>
            </div>
        </div>
        <p>Ежегодные соревнования по CrossFit</p>
        <button>заполнить заявку</button>
    </div>
    <img src={pushUp} alt="push up"/>
  </div>;
};
