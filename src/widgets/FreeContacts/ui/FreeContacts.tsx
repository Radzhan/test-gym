import { useState } from "react";
import style from "./FreeContacts.module.scss";
import { PersonI } from "../../../types";
import { useAppDispatch } from "../../../shared/lib/hooks/hooks";
import { postPerson } from "../model/services";

export const FreeContacts = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<PersonI>({
    name: "",
    number: 0,
  });
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState: PersonI) => ({ ...prevState, [name]: value }));
  };

  const submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(postPerson(state));
    } catch (e) {
      console.log(e);
    }
    setState({ name: "", number: 0 });
  };
  return (
    <div className={style.freeContactBlock}>
      <div className={style.freeBlockForm}>
        <div className={style.freeBlock}>
          <form method="post" onSubmit={submitFormHandler}>
            <h5 style={{ color: "white" }}>БЕСПЛАТНОЕ занятие</h5>
            <div className={style.freeInputBox}>
              <input
                type="text"
                required
                onChange={inputChangeHandler}
                name="name"
                placeholder="Имя"
              />
              <input
                type="phone"
                required
                placeholder="Телефон"
                onChange={inputChangeHandler}
                name="number"
              />
            </div>
            <button type="submit">отправить</button>
          </form>
        </div>
      </div>
      <div className={style.contactsBlock}>
        <div className={style.contactsIn}>
          <h5 style={{ marginTop: "55px" }}>Контакты</h5>
          <div className={style.contactsBox}>
            <div className={style.box1}>
              <h6>Адрес:</h6>
              <div className={style.contactsInfo}>
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
    </div>
  );
};
