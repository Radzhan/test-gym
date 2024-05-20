import { createAsyncThunk } from "@reduxjs/toolkit";
import { PersonI } from "../../../types";


export const postPerson = createAsyncThunk<void ,PersonI>('freeContacts/post', async (person) => {
    alert(`Отправленные данные \n имя ${person.name} телефон ${person.number}`);
});