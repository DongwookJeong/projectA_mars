export default function elementMk(tagName, obj) {
  let element = [];
  let temp = `<${tagName}></${tagName}`;
  element.push(temp);
  return element.join("");
}
