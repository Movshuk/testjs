function foo(x, callback){
  console.log(x);
  callback();
}

function boo(){
  console.log(2);
}

foo(1, boo);

boo();