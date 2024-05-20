import {configureStore} from "@reduxjs/toolkit";
import { freeContactsReducer } from "../../widgets/FreeContacts/model/slice";

export const store = configureStore({
  reducer: {
    freeContacts: freeContactsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;