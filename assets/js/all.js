"use strict";

// console.log('Hello!');
// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });
// 購買數量按鈕
var plus = document.querySelector(".plus");
var num = document.querySelector(".num");
var minus = document.querySelector(".minus");
var a = 1;
plus.addEventListener("click", function () {
  a++;
  a = a < 10 ? "0" + a : a;
  num.innerText = a;
});
minus.addEventListener("click", function () {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
});
//# sourceMappingURL=all.js.map
