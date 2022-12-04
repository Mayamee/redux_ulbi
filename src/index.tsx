import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { setupStore } from "./store/store";

const store = setupStore();

const container = document.getElementById("root") as HTMLElement;
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

createRoot(container).render(app);
