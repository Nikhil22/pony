function foo(a, b, c) {
  return a + b + c;
}

function bar(a) {
  return a * a;
}

function baz(a) {
  return a - 1;
}

var papoose = new Papoose();
var pipeFn = papoose.pipe(foo, bar, baz);

document.getElementById('result').innerHTML = pipeFn(1,2,3);
