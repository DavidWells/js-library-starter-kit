import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

let getRandomItem = uniqueRandomArray(starWarsNames);

export default {
  all: starWarsNames,
  random: random
}

/*
Add new stuff
 */

 /* move new stuff! */

 /* new feature 3 */

function random(number) {
  if (number === undefined) {

    return getRandomItem();

  } else {
    let randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
