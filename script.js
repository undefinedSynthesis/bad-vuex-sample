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
        { name: "夏川椎菜", age: 25, hometown: "千葉県", checked: false },
        { name: "麻倉もも", age: 27, hometown: "福岡県", checked: false },
        { name: "雨宮天", age: 28, hometown: "東京都", checked: false },
        { name: "上原歩夢", hometown: "東京都", checked: false },
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
    extractNames: function () {
      return arrayColumn(this.searchResult, "age");
    },
  },
});

app.mount("#app");

/**
 * PHPのarray_columnのJavaScript版。
 *
 * @param {Array} array         配列
 * @param {string} columnName   カラム名
 * @returns                     カラム名で指定した単一のカラムの値配列。第一引数が配列でないなら空の配列を返す。
 */
function arrayColumn(array, columnName) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array
    .map((elem) => {
      if (elem.hasOwnProperty(columnName)) {
        return elem[columnName];
      }
    })
    .filter((elem) => elem !== void 0);
}
