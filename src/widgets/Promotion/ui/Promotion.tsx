import style from "./Promotion.module.scss";

export const Promotion = () => {
  return (
    <div className={`container ${style.promotionBlock}`}>
      <h3>Акции</h3>
      <div className={style.promotionInner}>
        <div className={style.price}>
            <b>Год</b>
            <h4>4999</h4>
            <p>Безлимитный абонемент в тренажерный зал</p>
            <a>подробнее</a>
        </div>
        <div className={style.girl}></div>
      </div>
      <div className={style.ticket}>
        <div className={style.ticketInner}>
          <b>Месяц бесплатно</b>
          <p>Приведи друга, получи абонемент в подарок</p>
          <a>подробнее</a>
        </div>
        <div className={style.ticketInner}>
          <b>Скидка 20%</b>
          <p>Корпоративный фитнес  с командой</p>
          <a>подробнее</a>
        </div>
      </div>
    </div>
  );
};
