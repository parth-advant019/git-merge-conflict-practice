function adder(num) {
  function add(b) {
    console.log(num + b);
  }

  return add;
}

const addTO10 = adder(10);

addTO10(5);
addTO10(7);

console.log("this is first commit to main");
