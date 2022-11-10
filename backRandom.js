const imgs = [
  "./images/ghibli.jpg",
  "./images/ghibli2.jpg",
  "./images/ghibli3.jpg",
];
const babyImgs = [
  "./images/page.png",
  "./images/page2.png",
  "./images/page3.png",
];
// export default function random() {
//   let selectImage = imgs[Math.floor(Math.random() * imgs.length)];
//   console.log(selectImage);

//   return selectImage;
// }
let imgThing = imgs[Math.floor(Math.random() * 3)];
function one(babyImg){
  // let img = imgThing
  // let babyImgs
  // console.log(imgThing)
  if(imgThing === './images/ghibli.jpg'){
    babyImg = "./images/page.png"
    // return (imgThing,babyImg)
  }else if(imgThing ==='./images/ghibli2.jpg'){
    babyImg = "./images/page2.png"
    // return (imgThing, babyImg)
  }else if(imgThing ==='./images/ghibli3.jpg'){
    babyImg = "./images/page3.png"
    
  }
  return (babyImg)
}
console.log(imgThing)
console.log(one())
// console.log(img)
// let two = one()

/*
random();
function abc(imgs){
  let wow = imgs[Math.floor(Math.random() * imgs.length)];

  imgs(wow)
}
abc(wow)=>{
}
*/
/*
! 자 필요한 것들
? 랜덤
? if() ghibli.jpg일때 page.png
? 공통점 뒤 파일확장자, .n
? module 모아서 슝~
*/

// const selectImage = imgs[Math.floor(Math.random() * imgs.length)];
// console.log(selectImage);
// console.log(imgs);
// console.log(selectImage);
// // if(selectImage.valueOf ===)
// function select(value){
//   if(selectImage.valueOf === "./images/ghibli.jpg"){
//     for(let i = 0; i <= "./images"; i++){

//     }
//   }
// }
