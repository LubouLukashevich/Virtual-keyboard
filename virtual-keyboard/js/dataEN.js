const row1 = [
  ['`', true, '', 'Backquote'],
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
  ['Q', false, '','KeyQ'],
  ['W', false, '','KeyW'],
  ['E', false, '','KeyE'],
  ['R', false, '','KeyR'],
  ['T', false, '','KeyT'],
  ['Y', false, '','KeyY'],
  ['U', false, '','KeyU'],
  ['I', false, '','KeyI'],
  ['O', false, '','KeyO'],
  ['P', false, '','KeyP'],
  ['[', false, '','BracketLeft'],
  [']', false, '','BracketRigh'],
  ['\\', false, '','Backslash'],
  ['DEL', true, '','Delete']
];

const row3 = [
  ['Caps Lock', true, 'size25','CapsLock'],
  ['A', false, '','KeyA'],
  ['S', false, '','KeyS'],
  ['D', false, '','KeyD'],
  ['F', false, '','KeyF'],
  ['G', false, '','KeyG'],
  ['H', false, '','KeyH'],
  ['J', false, '','KeyJ'],
  ['K', false, '','KeyK'],
  ['L', false, '','KeyL'],
  [';', false, '','Semicolon'],
  ["'", false, '','Quote'],
  ['ENTER', true, 'size2','Enter']
];

const row4 = [
  ['Shift', true, 'size25','ShiftLeft'],
  ['\\', false, '','IntlBackslash'],
  ['Z', false, '','KeyZ'],
  ['X', false, '','KeyX'],
  ['C', false, '','KeyC'],
  ['V', false, '','KeyV'],
  ['B', false, '','KeyB'],
  ['N', false, '','KeyN'],
  ['M', false, '','KeyM'],
  [',', false, '','Comma'],
  ['.', false, '','Period'],
  ['/', false, '','Slash'],
  ['&uarr;', true,'','ArrowUp'],
  ['Shift', true,'','ShiftRight']
];

const row5 = [
  ['Ctrl', true, 'size15','ControlLeft'],
  ['Win', true, '','MetaLeft'],
  ['Alt', true, '','AltLeft'],
  ['', true, 'space', 'Space'],
  ['Alt', true, '','AltRight'],
  ['Ctrl', true, 'size15','ControlRight'],
  ['&larr;', true, '','ArrowLeft'],
  ['&darr;', true, '','ArrowDown'],
  ['&rarr;', true, '','ArrowRight']
];

export function loadDataEN () {
  const allData = [row1, row2, row3, row4, row5];
  return allData;
}

