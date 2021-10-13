import timecard from "./js/template/timecard.js";
import add from "./js/template/add.js";
import store from "./js/store/store.js";

const app = {
  components: {
    timecard: timecard,
    add: add,
  },
  computed: {
    exists() {
      return this.$store.getters.exists("小倉唯");
    },
  },
  methods: {
    input() {
      this.$store.commit("push", "小倉唯");
    },
    dispatch() {
      this.$store.dispatch("getActresses");
    },
  },
  created() {
    this.dispatch();
  },
};
Vue.createApp(app).use(store).mount("#app");
