const numbersList1 = [1, 2, 3, 4, 5];

console.log('before pop', numbersList1);
const lastNumber = numbersList1.pop();
console.log(lastNumber);
console.log('after pop', numbersList1);

// input --
// output last element of array
// pop

const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push', numbersList1);
const pushRes = numbersList1.push(777);
console.log(pushRes);
console.log('after push', numbersList2);

// input element(number)
// output new length of array
// push

const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift', numbersList3);
const shiftRes = numbersList3.shift(777);
console.log(shiftRes);
console.log('after shift', numbersList3);

// input --
// output first element of array
// shift

const anotherNumberList = [5, 0, 8, 10, -4, 50, 220];

const filterRes = anotherNumberList.filter(function filterCallback() {
  return element;
});

anotherNumberList.filter(el => el > 0);

console.log(filterRes);
// input - callback
// output new Array
// filter

// callback
//  input: element (any type), index(optional, array(optional)
//  output: boolean;

function sum(from, to, resolver) {
  let sumRes = 0;
  for(let index = from; index <= to; index += 1) {
    sumRes += index;
  }
    resolver(sumRes);
}

function resolver(result) {
  console.log(result);
}

// -- test data
console.log(sum(4, 44, resolver));