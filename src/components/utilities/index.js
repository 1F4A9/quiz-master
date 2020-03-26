export function shuffle(array) {
  var m = array.length, t, i;

  while (m) {

    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export function substringFirstChar(str) {
  return str.substring(1);
}

export function firstLetterCapital(str) {
  let newStr = str.toUpperCase().slice(0, 1) + str.slice(1);
  return newStr;
}