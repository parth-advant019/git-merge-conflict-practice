function adder(num) {
  function add(b) {
    console.log(num + b);
  }

  return add;
}

const addTO10 = adder(10);

addTO10(5);
addTO10(7);

console.log("welcome from third branch changed code i change in main");
console.log("code from main again");
console.log("code from third branch");
