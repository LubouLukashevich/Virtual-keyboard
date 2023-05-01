import { generateContent } from './js/content.js';
import { generateKeyboardEN } from './js/keyboardEN.js';
import { generateKeyboardRU } from './js/keyboardRU.js';

//language constant
let language = 'EN';
//Current pressed keys
let pressKey = new Set();
//cursor position
let cursorPosition = 0;

//-----Local Storage-----
// In
const setLocalStorage = () => {
  localStorage.setItem('language', language);
}

//Out
const getLocalStorage = () => {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);

window.onload = function() {

  //Generate page
  renderContent();

  //Generate keyboard
  renderKeyboard();

  //Handler for tapping key of physical keyboard
  addKeysClickHandler();

  //Handler for tapping buttons of virtual keyboard
  addButtonsClickHandler();

  //Focus text
  addFocus();

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
  container.innerHTML = '';
  const help = document.querySelector('.content__help');
  if (language === 'EN') {
    container.innerHTML = generateKeyboardEN();
    help.innerHTML = 'Made for Windows system<br/>To switch the language, simultaneously press the left Shift and the left Alt';
  } else {
    container.innerHTML = generateKeyboardRU();
    help.innerHTML = 'Клавиатура создана в системе Windows<br/>Для переключения языка одновременно нажмите левый Shift и левый Alt';
  }
}

const addKeysClickHandler = () => {
  document.addEventListener('keydown', function(event) {
    addFocus();
    pressKey.add(event.code);
    addSelectKey(event.code);
    if (languageCheck()) {
      addFocus();
    };
  });
  
  document.addEventListener('keyup', function(event) {
    pressKey.delete(event.code);
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

const languageCheck = () => {
  if (pressKey.has('AltLeft') && pressKey.has('ShiftLeft')) {
    (language === 'EN')? language = 'RU' : language = 'EN';
    renderKeyboard();
    addFocus();
  } else {
    return true
  }
}

const addButtonsClickHandler = () => {
  let buttons = document.querySelectorAll('.key');
  buttons.forEach(el =>
    el.addEventListener('click', addChar));
}

const addChar = (e) => {
  let textarea = document.querySelector('.text');
  addFocus();
  if (e.target.innerHTML === 'Tab') { 
    textarea.innerHTML += '    ';
  } else {
    textarea.innerHTML += e.target.innerHTML;
  }
}

const addFocus = () => {
  let textarea = document.querySelector('.text');
  textarea.focus();
  cursorPosition = textarea.selectionStart;
}