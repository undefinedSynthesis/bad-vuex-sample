const app = Vue.createApp({
  data() {
    return {
      selected: "916851500",
      options: null,
    };
  },
  created: async function () {
    const response = await axios.get("../cities.php");
    if (response.status === 200 && response.data) {
      this.options = response.data;
    }
  },
});

app.mount("#app");
