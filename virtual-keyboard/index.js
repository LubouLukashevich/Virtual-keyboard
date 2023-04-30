import { generateContent } from './js/content.js';
import { generateKeyboard } from './js/keyboardEN.js';


window.onload = function() {
  //Generate page
  renderContent();

  //Generate keyboard
  renderKeyboard();

  //Handler for tapping key of physical keyboard
  addbuttonClickHandler();
}

const renderContent = () => {
  let head = document.head;
  let body = document.createElement('body');
  body.className = 'page';
  head.after(body);
  body.append(generateContent());
}

const renderKeyboard = () => {
  const container = document.querySelector('.content__keyboard');
  container.innerHTML = generateKeyboard();
}



const addbuttonClickHandler = () => {
  document.addEventListener('keydown', function(event) {
    addSelectKey(event.code);
  });
  
  document.addEventListener('keyup', function(event) {
    setTimeout(() => removeSelectKey(event.code), 200);
  });
}

const addSelectKey = (key) => {
  let button = document.getElementById(key);
  button.classList.add('key_select');
}

const removeSelectKey = (key) => {
  let button = document.getElementById(key);
  button.classList.remove('key_select');
}