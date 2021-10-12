import { default as hendler } from "./error-handler.js";

const app = Vue.createApp({
  data() {
    return {
      datetime: null,
    };
  },
  mounted() {
    const datetimeInput = this.$refs.datetimeInput;
    datetimeInput.classList.add("flatpickr");
    flatpickr(".flatpickr", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      time_24hr: true,
      defaultDate: "today",
      maxDate: "today",
    });
  },
  computed: {
    isValidDateTime: function () {
      return moment(this.datetime).isValid();
    },
  },
  methods: {
    inputTime: function () {
      const now = moment().format("YYYY-MM-DD HH:mm");
      this.datetime ??= now;
    },
  },
});

app.mount("#app");
