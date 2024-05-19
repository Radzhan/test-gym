import style from "./advantages.module.scss";

export const Advantages = () => {
  return (
    <div className={style.advantagesBlock}>
      <div className="container">
        <h3 className={style.title}>Наши преимущества</h3>
        <div className={style.advantagesInner}>
          <div className={style.block1}>
            <div>
              <div className={style.innerNumber}>
                <b>900</b>
                <p>кв/м</p>
              </div>
              <div className={style.innerText}>
                <b>Площадь</b>
                <p>Занимайтесь без очередей и толпучки</p>
              </div>
            </div>
            <div>
              <div className={style.innerNumber}>
                <b>350</b>
                <p>мест</p>
              </div>
              <div className={style.innerText}>
                <b>Комфорт</b>
                <p>Просторные раздевалки, душевые, фен, Wi-Fi, кулеры</p>
              </div>
            </div>
          </div>
          <div className={style.block2}>
            <h4>100</h4>
            <b>Тренажеров</b>
            <p>Современные тренажеры на все группы мышц</p>
          </div>
          <div className={style.block3}>
            <div>
              <div className={style.innerNumber}>
                <b>70</b>
                <p>машин</p>
              </div>
              <div className={style.innerText}>
                <b>Собственная парковка</b>
                <p>
                  Вы всегда найдете место для своей машины на нашей парковке
                </p>
              </div>
            </div>
            <div>
              <div className={style.innerNumber}>
                <b>5+</b>
                <p>лет</p>
              </div>
              <div className={style.innerText}>
                <b>Тренерский опыт</b>
                <p>
                  Добивайтесь своих целей быстрее с профессиональным тренером
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
