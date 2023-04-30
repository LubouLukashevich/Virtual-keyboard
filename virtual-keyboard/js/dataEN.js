const row1 = [
  ['`', true, ''],
  ['1', false, ''],
  ['2', false, ''],
  ['3', false, ''],
  ['4', false, ''],
  ['5', false, ''],
  ['6', false, ''],
  ['7', false, ''],
  ['8', false, ''],
  ['9', false, ''],
  ['0', false, ''],
  ['-', false, ''],
  ['=', false, ''],
  ['Backspace', true, 'size25']
];

const row2 = [
  ['Tab', true, 'size'],
  ['Q', false, ''],
  ['W', false, ''],
  ['E', false, ''],
  ['R', false, ''],
  ['T', false, ''],
  ['Y', false, ''],
  ['U', false, ''],
  ['I', false, ''],
  ['O', false, ''],
  ['P', false, ''],
  ['[', false, ''],
  [']', false, ''],
  ['\\', false, ''],
  ['DEL', true, '']
];

const row3 = [
  ['Caps Lock', true, 'size25'],
  ['A', false, ''],
  ['S', false, ''],
  ['D', false, ''],
  ['F', false, ''],
  ['G', false, ''],
  ['H', false, ''],
  ['J', false, ''],
  ['K', false, ''],
  ['L', false, ''],
  [';', false, ''],
  ["'", false, ''],
  [']', false, ''],
  ['ENTER', true, 'size2']
];

const row4 = [
  ['Shift', true, 'size25'],
  ['\\', false, ''],
  ['Z', false, ''],
  ['X', false, ''],
  ['C', false, ''],
  ['V', false, ''],
  ['B', false, ''],
  ['N', false, ''],
  ['M', false, ''],
  ['.', false, ''],
  [',', false, ''],
  ["/", false, ''],
  ['&uarr;', true, ''],
  ['Shift', true, '']
];

const row5 = [
  ['Ctrl', true, 'size15'],
  ['Win', true, ''],
  ['Alt', true, ''],
  ['', true, 'space'],
  ['Alt', true, ''],
  ['Ctrl', true, 'size15'],
  ['&larr;', true, ''],
  ['&darr;', true, ''],
  ['&rarr;', true, '']
];

export function loadDataEN () {
  const allData = [row1, row2, row3, row4, row5];
  return allData;
}

