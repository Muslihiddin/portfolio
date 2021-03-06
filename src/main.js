import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "./assets/styles/main.scss";
import router from './router'

createApp(App).use(router).use(store).mount("#app");
