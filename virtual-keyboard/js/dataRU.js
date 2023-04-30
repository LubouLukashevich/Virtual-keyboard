const row1 = [
  ['ё', true, '', 'Backquote'],
  ['1', false, '','Digit1'],
  ['2', false, '','Digit2'],
  ['3', false, '','Digit3'],
  ['4', false, '','Digit4'],
  ['5', false, '','Digit5'],
  ['6', false, '','Digit6'],
  ['7', false, '','Digit7'],
  ['8', false, '','Digit8'],
  ['9', false, '','Digit9'],
  ['0', false, '','Digit0'],
  ['-', false, '','Minus'],
  ['=', false, '','Equal'],
  ['Backspace', true, 'size25','Backspace']
];

const row2 = [
  ['Tab', true, 'size','Tab'],
  ['й', false, '','KeyQ'],
  ['ц', false, '','KeyW'],
  ['у', false, '','KeyE'],
  ['к', false, '','KeyR'],
  ['е', false, '','KeyT'],
  ['н', false, '','KeyY'],
  ['г', false, '','KeyU'],
  ['ш', false, '','KeyI'],
  ['щ', false, '','KeyO'],
  ['з', false, '','KeyP'],
  ['х', false, '','BracketLeft'],
  ['ъ', false, '','BracketRigh'],
  ['\\', false, '','Backslash'],
  ['DEL', true, '','Delete']
];

const row3 = [
  ['Caps Lock', true, 'size25','CapsLock'],
  ['ф', false, '','KeyA'],
  ['ы', false, '','KeyS'],
  ['в', false, '','KeyD'],
  ['а', false, '','KeyF'],
  ['п', false, '','KeyG'],
  ['р', false, '','KeyH'],
  ['о', false, '','KeyJ'],
  ['л', false, '','KeyK'],
  ['д', false, '','KeyL'],
  ['ж', false, '','Semicolon'],
  ['э', false, '','Quote'],
  ['ENTER', true, 'size2','Enter']
];

const row4 = [
  ['Shift', true, 'size25','ShiftLeft'],
  ['\\', false, '','IntlBackslash'],
  ['я', false, '','KeyZ'],
  ['ч', false, '','KeyX'],
  ['с', false, '','KeyC'],
  ['м', false, '','KeyV'],
  ['и', false, '','KeyB'],
  ['т', false, '','KeyN'],
  ['ь', false, '','KeyM'],
  ['б', false, '','Comma'],
  ['ю', false, '','Period'],
  ['.', false, '','Slash'],
  ['&uarr;', true,'','ArrowUp'],
  ['Shift', true,'','ShiftRight']
];

const row5 = [
  ['Ctrl', true, 'size15','ControlLeft'],
  ['Win', true, '','MetaLeft'],
  ['Alt', true, '','AltLeft'],
  [' ', true, 'space', 'Space'],
  ['Alt', true, '','AltRight'],
  ['Ctrl', true, 'size15','ControlRight'],
  ['&larr;', true, '','ArrowLeft'],
  ['&darr;', true, '','ArrowDown'],
  ['&rarr;', true, '','ArrowRight']
];

export function loadDataRU () {
  const allData = [row1, row2, row3, row4, row5];
  return allData;
}