function multiplyByTwo(number) {
   function inner() {
    return number * 2;
  };
  return inner
}

console.log(multiplyByTwo(4)()); 