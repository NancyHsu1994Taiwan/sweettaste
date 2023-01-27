// console.log('Hello!');

// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });

// 購買數量按鈕

const plus = document.querySelector(".plus");
const num = document.querySelector(".num");
const minus = document.querySelector(".minus");

let a = 1;

plus.addEventListener("click",function(){
  a++;
  a = (a < 10) ? "0" + a:a;
  num.innerText = a;

});

minus.addEventListener("click",function(){
  if(a > 1){
    a--;
    a = (a < 10) ? "0" + a:a;
    num.innerText = a;
  }
})

