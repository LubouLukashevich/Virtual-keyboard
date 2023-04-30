import { loadDataEN } from './dataEN.js';

const data = loadDataEN();

function generateTemplate(data) {
  let template = '';
  data.forEach(element => {
    template += '<div class="row">'
    element.forEach(el => {
      let style = (el[1])? ('letter_control') : ('letter');
      if (el[2] !== '') style = style + ' ' + el[2]; 
      template += `<button class="${style}">${el[0]}</button>`;
    });
    template += '</div>'
  });
  return template;
}

export function generateKeyboard() {
  return (data)? generateTemplate(data) : 'No data';
}