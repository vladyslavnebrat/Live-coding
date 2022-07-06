console.log('Hello');
function getSenseOfLife() {
  return 42;
}

// option 1
const res = getSenseOfLife();
console.log(res);

// option 2
console.log(getSenseOfLife());

// func 2
function getSquared(num) {
  return num * num;
}

// test data
console.log(getSquared(4));

// func 3
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

// test data
console.log(sum(3, 4));
console.log(sum(-3, 4));
console.log(sum('3', 4));
console.log(sum('3', '4'));
console.log(sum(3, Infinity));

// func 4
function printMessage(age) {
  return 'I am ' + age + ' years old';
}

// test data
console.log(printMessage(34));
console.log(printMessage([34]));
console.log(printMessage(['34']));
console.log(printMessage({}));
console.log(printMessage([{ 34: 2 }]));

// func 5
function getSum(from, to) {
  let result = 0;

  for (let index = from; index <= to; index += 1) {
    result += index;
  }

  return result;
}

//test data
console.log(getSum(5, 7));
console.log(getSum(-5, [4, 6], 7));

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return getSum(firstFrom, firstTo) > getSum(secondFrom, secondTo);
}

console.log(compareSums(-5, 4, 6, 7));

const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(0, 1));
console.log(mult(0, -Infinity));
console.log(mult(3, Infinity));
console.log(mult(4, 5));

const getMagicNumber = () => 17;

//----test data
console.log(getMagicNumber(17));
console.log(getMagicNumber('19'));
console.log(getMagicNumber(16));
console.log(getMagicNumber(14, [19]));
