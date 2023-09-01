"use client";

import store from "@/store/index";
import { Provider } from "react-redux";

import { persistor } from "@/store/index";
import { PersistGate } from "redux-persist/integration/react";

export default function CartProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>{" "}
    </Provider>
  );
}
