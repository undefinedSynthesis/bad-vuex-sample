import { default as hendler } from "./error-handler.js";

const app = Vue.createApp({
  data() {
    return {
      selected: "916851500",
      options: null,
    };
  },
  created: async function () {
    const { data, error } = await axios.get("../cities.php");
    if (data) {
      this.options = data;
    }
  },
});

app.mount("#app");
