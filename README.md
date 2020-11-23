# Javascript Basics

### 1. Add 2 numbers.

```js
const add = (a, b) => {
  return console.log(`Addition of ${a} and ${b} is ${a + b}`);
};

add(10, 20);
```

### 2. Check prime number.
**Note**
 A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number.

```js
const chkPrime = (n) => {
  if (n == 2) return true;
  for (c = 2; c <= n - 1; c++) {
    return n % c == 0 ? false : true;
  }
};

const printPrime = (range) => {
  var arrPrime = [];
  for (i = 1; i <= range; i++) {
    chkPrime(i) == true ? arrPrime.push(i) : "";
  }
  return console.log(`Prime Numbers = `, arrPrime);
};

printPrime(100);
```
