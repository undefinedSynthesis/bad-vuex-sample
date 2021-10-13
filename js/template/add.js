export default {
  template: "#add",
  name: "add",
  data() {
    return {
      name: "小倉唯",
    };
  },
  computed: {
    overCounts() {
      return this.$store.getters.getProcs.length > 4;
    },
  },
  methods: {
    add: function () {
      this.$store.commit("push", this.name);
    },
  },
};
