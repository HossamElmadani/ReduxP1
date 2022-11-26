import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "./store/reducer";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(userReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
