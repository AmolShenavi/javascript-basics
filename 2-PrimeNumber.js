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
