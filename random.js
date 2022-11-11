const prac = Math.random(1, 10);
console.log(prac);

// function rrr(min, max) {
//   return Math.random()*(max-min)+min;
// }

function ran(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min + 1))+min
}
console.log(ran(1, 10));
