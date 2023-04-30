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
  ['q', false, '','KeyQ'],
  ['w', false, '','KeyW'],
  ['e', false, '','KeyE'],
  ['r', false, '','KeyR'],
  ['t', false, '','KeyT'],
  ['y', false, '','KeyY'],
  ['u', false, '','KeyU'],
  ['i', false, '','KeyI'],
  ['o', false, '','KeyO'],
  ['p', false, '','KeyP'],
  ['[', false, '','BracketLeft'],
  [']', false, '','BracketRigh'],
  ['\\', false, '','Backslash'],
  ['DEL', true, '','Delete']
];

const row3 = [
  ['Caps Lock', true, 'size25','CapsLock'],
  ['a', false, '','KeyA'],
  ['s', false, '','KeyS'],
  ['d', false, '','KeyD'],
  ['f', false, '','KeyF'],
  ['g', false, '','KeyG'],
  ['h', false, '','KeyH'],
  ['j', false, '','KeyJ'],
  ['k', false, '','KeyK'],
  ['l', false, '','KeyL'],
  [';', false, '','Semicolon'],
  ["'", false, '','Quote'],
  ['ENTER', true, 'size2','Enter']
];

const row4 = [
  ['Shift', true, 'size25','ShiftLeft'],
  ['\\', false, '','IntlBackslash'],
  ['z', false, '','KeyZ'],
  ['x', false, '','KeyX'],
  ['c', false, '','KeyC'],
  ['v', false, '','KeyV'],
  ['b', false, '','KeyB'],
  ['n', false, '','KeyN'],
  ['m', false, '','KeyM'],
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
  [' ', true, 'space', 'Space'],
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

