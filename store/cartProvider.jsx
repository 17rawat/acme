"use client";

import store from "@/store/index";
import { Provider } from "react-redux";

export default function CartProvider({ children }) {
  return <Provider store={store}> {children}</Provider>;
}
