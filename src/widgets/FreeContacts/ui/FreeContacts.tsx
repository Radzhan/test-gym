import style from "./FreeContacts.module.scss";

export const FreeContacts = () => {
  return (
    <div className={style.freeContactBlock}>
      <div className={style.freeBlock}>
        <div className={style.freeBlockForm}>
          <form method="post">
            <h5>БЕСПЛАТНОЕ занятие</h5>
            <div className="freeInputBox">
              <label>
                Имя
                <input type="text" required />
              </label>
              <label>
                Телефон
                <input type="email" required />
              </label>
            </div>
            <button type="submit">отправить</button>
          </form>
        </div>
      </div>
      <div className={style.contactsBlock}>
        <h5>Контакты</h5>
        <div className={style.contactsBox}>
          <div className={style.box1}>
            <div className={style.contactsInfo}>
              <h6>Адрес:</h6>
              <p>г. Омск, ул. 60 лет Октября, 7</p>
            </div>
            <div className={style.contactsInfo}>
              <h6>График работы:</h6>
              <p>Пн-Вс: с 8:00 до 22:00</p>
            </div>
          </div>
          <div className={style.box2}>
            <div className={style.contactsInfo}>
              <h6>Телефон:</h6>
              <a href="#">8-800-555-55-55</a>
            </div>
            <div className={style.contactsInfo}>
              <h6>Email:</h6>
              <a href="#">omsk@supergym.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
