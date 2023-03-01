import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
app.directive("focus", {
  mounted: (el) => el.focus(),
});
setTimeout(() => app.mount("#app"), 1000);
