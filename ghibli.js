// import apiJs from "./ghibliAPI.js";

const makeItTag = (parent, tagName, html) => {
  const tag = document.createElement(tagName);
  tag.innerHTML = html;
  parent.appendChild(tag);
};
// function styling(element, styleProps, textContent = "") {
//   for (const miya in styleProps) {
//     element.style[miya] = styleProps[miya];
//   }
//   element.textContent = textContent;
// }
const root = document.getElementById("root");
makeItTag(
  root,
  "header",
  `<div><img style="width : 70px; height : 70px; src="./images/home.png"/></div>`
);

// const rootStyle = {
//   width: "100vw",
//   height: "100vh",
// };
// styling(root, rootStyle);

// const div = document.createElement("div");
// root.appendChild(div);

// export default apiJs(arr, imgArr).then(() => {
//   for (let i = 0; i < arr.length; i++) {
//     div.innerHTML += `<div><div>${apiJs[i]}</div></div>`;
//   }
// });
