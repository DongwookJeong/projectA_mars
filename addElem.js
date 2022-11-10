import elementMk from "./elementMk.js";
// const babyImgs = [
  //   "./images/page.png",
  //   "./images/page2.png",
  //   "./images/page3.png",
  // ]
  const imgs = [
    "./images/ghibli.jpg",
    "./images/ghibli2.jpg",
    "./images/ghibli3.jpg",
  ];
  let imgThing = imgs[Math.floor(Math.random() * 3)];
  export default function moreElement(babyImg) {
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
console.log(moreElement())
// const main = `${elementMk("div", imgThing)}`
// const baby = `${elementMk("div", moreElement())}`
// root.innerHTML(main)
// root.innerHTML(baby)