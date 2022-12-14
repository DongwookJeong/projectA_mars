// import elementMk from "./elementMk.js";
// import addElem from "./addElem.js";
import { imgThing, moreElement } from "./addElem.js";
const root = document.getElementById("root");
const header = document.createElement("header");
const home = document.createElement("div");
const backgroundImg = document.createElement("div");
const babyImg = document.createElement("div");

root.appendChild(header);
header.appendChild(home);
root.appendChild(backgroundImg);
backgroundImg.appendChild(babyImg);

// const back = `${elementMk("div", addElem())}`
// root.innerHTML =

function styling(element, styleProps) {
  for (const miya in styleProps) {
    element.style[miya] = styleProps[miya];
  }
}

// const headerDoc = `${elementMk("header")}`;

// const headerDoc = `${elementMk("header")}`;

// root.innerHTML = rootDoc;
// root.innerHTML = headerDoc;
const rootStyle = {
  width: "100vw",
  height: "100vh",
  margin: 0,
  display: "flex",
  flexDirection: "column",
};
const headerStyle = {
  position: "absolute",
  width: "inherit",
  height: "5vh",
};
const homeStyle = {
  width: "45px",
  height: "inherit",
  backgroundImage: `URL("./images/homebu.png")`,
  backgroundSize: "cover",
};
const backStyle = {
  width: "inherit",
  height: "inherit",
  backgroundImage: `url("${imgThing}")`,
  backgroundSize: "cover",
  margin: 0,
};
const babyStyle = {
  width: "inherit",
  height: "inherit",
  backgroundImage: `url(${moreElement()})`,
  backgroundSize: "cover",
  margin: 0,
  position: "absolute",
  left: "-15px",
  top: "-10px",
};
styling(root, rootStyle);
styling(header, headerStyle);
styling(home, homeStyle);
styling(backgroundImg, backStyle);
styling(babyImg, babyStyle);

/*
? 11월 9일자 배경이미지 삽입 및 css처리
const root = document.getElementById("root");

const backgroundImg = document.createElement("div");
const header = document.createElement("header")
const home = document.createElement("div")
root.appendChild(header)
root.appendChild(backgroundImg);
header.appendChild(home)

function styling(element, styleProps) {
  for (const miya in styleProps) {
    element.style[miya] = styleProps[miya];
  }
}
! 랜덤 이미지
const backStyle = {
  width: "inherit",
  height: "inherit",
  backgroundImage: `URL("./images/ghibli.jpg")`,
  backgroundSize: "cover",
  margin: 0
};
styling(backgroundImg, backStyle);
*/
/*
? 11월 8일자 api 시도, 이미지 넣기
import apiJs from "./ghibliAPI.js";
const makeItTag = (parent, tagName, html) => {
  const tag = document.createElement(tagName);
  tag.innerHTML = html;
  parent.appendChild(tag);
};
makeItTag(root, "header", `<div><img src="./images/home.png"/></div>`);



export default apiJs(arr, imgArr).then(() => {
  for (let i = 0; i < arr.length; i++) {
    div.innerHTML += `<div><div>${apiJs[i]}</div></div>`;
  }
});
*/
