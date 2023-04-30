import { loadDataRU } from './dataRU.js';

const data = loadDataRU();

function generateTemplate(data) {
  let template = '';
  data.forEach(element => {
    template += '<div class="row">'
    element.forEach(el => {
      let style = (el[1])? ('key key_control') : ('key');
      if (el[2] !== '') style = style + ' ' + el[2]; 
      template += `<button id="${el[3]}" class="${style}">${el[0]}</button>`;
    });
    template += '</div>'
  });
  return template;
}

export function generateKeyboardRU() {
  return (data)? generateTemplate(data) : 'No data';
}