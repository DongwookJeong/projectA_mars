import elementMk from "./elementMk.js";
const imgs = [
  "./images/ghibli.jpg",
  "./images/ghibli2.jpg",
  "./images/ghibli3.jpg",
];
const babyImgs = [
  "./images/page.png",
  "./images/page2.png",
  "./images/page3.png",
]
export default function moreElement() {
  let temp = [];
  let elem = elementMk("div");
  temp.push(elem);

  return temp.join("");
}
