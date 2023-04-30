import { generateContent } from './js/content.js';
import { generateKeyboard } from './js/keyboardEN.js';


window.onload = function() {
  //Generate page
  renderContent();

  //Generate keyboard
  renderKeyboard();
}

const renderContent = () => {
  let head = document.head;
  console.log(head);
  let body = document.createElement('body');
  body.className = 'page';
  console.log(body);
  head.after(body);
  body.append(generateContent());
}

const renderKeyboard = () => {
  const container = document.querySelector('.content__keyboard');
  container.innerHTML = generateKeyboard();
}

