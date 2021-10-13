export default {
  template: "#add",
  name: "add",
  data() {
    return {
      name: "小倉唯",
    };
  },
  computed: {
    getCounts() {
      return this.$store.getters.getProcs.length;
    },
  },
  methods: {
    add: function () {
      this.$store.commit("push", this.name);
    },
  },
};
