export function generateContent() {
  let template = '';
  let main = document.createElement('main');
  main.className = 'content';
  template += '<section class="content__text">'
  template += '<textarea name="" id="" cols="10" rows="10" class="text"></textarea>';
  template += '</section>'
  template += '<section class="content__keyboard">'
  template += '</section>'
  template += '<section class="content__help">'
  template += '</section>'
  main.innerHTML = template;

  return main;
}