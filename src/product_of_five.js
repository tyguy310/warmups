// Given a number like 127289373913828309127381263, find the product of the 5 adjacent numbers whose product is largest. So in a simple case of 111333321, your function should return 162 from 33332



var n =  127289373;
var string = n.toString().split('');
console.log(string);

function mult (string) {
  var whole = string.length
  for (var i = 0; i < whole - 4; i++) {
    five = string.slice(i, i+5);
  }
}
console.log(mult(string));


function productOfFiveOne (num) {
  var prodArray = [];
  var large
}
