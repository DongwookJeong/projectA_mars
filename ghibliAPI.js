// console.log(ghibliURL.result);
export default async function ghibliOpenApi(arr, imgArr) {
  const ghibliURL = "https://ghibliapi.herokuapp.com";
  const request = new XMLHttpRequest();
  request.open("get", ghibliURL);
  request.responseType = "json";
  request.send();
  request.addEventListener("load", () => {
    const ghibliAPI = request.response;
    console.log(ghibliAPI);
  });
}
// ? 일단 나중에
// await fetch(ghibliURL)
// .then((datas) => {
//     return datas.json();
//   })
//   .then((data) => {
//     data.forEach((item) => {
//       arr.push(item.name);
//     });
// });
