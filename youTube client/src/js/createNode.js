export default function createNode(element, tags = [], attributes = [], text = '') {
  const newElement = document.createElement(element);
  tags.forEach((e) => {
    newElement.className = e;
  });
  attributes.forEach(e => newElement.setAttribute(e[0], e[1]));
  newElement.innerText = text;
  return newElement;
}
