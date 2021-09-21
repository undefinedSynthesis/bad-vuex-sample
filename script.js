const app = Vue.createApp({
  data() {
    return {
      keyword: "",
      actresses: [
        { name: "内田真礼", age: 32, hometown: "東京都", checked: false },
        { name: "東山奈央", age: 29, hometown: "東京都", checked: false },
        { name: "石原夏織", age: 28, hometown: "千葉県", checked: false },
        { name: "鬼頭明里", age: 26, hometown: "愛知県", checked: false },
        { name: "和氣あず未", age: 27, hometown: "東京都", checked: false },
        { name: "三森すずこ", age: 35, hometown: "東京都", checked: true },
        { name: "南條愛乃", age: 36, hometown: "静岡県", checked: true },
      ],
    };
  },
  computed: {
    searchResult: function () {
      if (!this.keyword) {
        return this.actresses;
      }
      return this.actresses.filter((act) => {
        return act.name.includes(this.keyword);
      });
    },
  },
});

app.mount("#app");
