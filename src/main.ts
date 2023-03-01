import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { getRandomIntInclusive } from "./utils/math";

const app = createApp(App);
app.directive("focus", {
  mounted: (el) => el.focus(),
});
setTimeout(() => app.mount("#app"), getRandomIntInclusive(500, 1500));
