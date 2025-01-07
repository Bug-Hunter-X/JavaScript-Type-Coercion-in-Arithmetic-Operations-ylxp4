function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  let z = foo(x, y);
  console.log(z); // Output: 30
}

function baz(){
  let x = 10;
  let y = "20";
  let z = foo(x,y);
  console.log(z); // Output: 1020
}

bar();
baz();