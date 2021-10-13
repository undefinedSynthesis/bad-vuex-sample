export default {
  template: "#timecard",
  name: "timecard",
  data() {
    return {
      name: null,
    };
  },
  computed: {
    getProcs() {
      return this.$store.getters.getProcs;
    },
  },
  methods: {
    add: function () {
      this.$store.commit("push", this.name);
    },
  },
};
