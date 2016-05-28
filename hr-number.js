console.log('Hardy–Ramanujan Number');
// the smallest number that is the sum of 2 cubes in n ways
var n = 2;
function HRnumber(n) {
  var capacity = 1000000000;
  for (var i = 4; i < capacity; i++) {
    var count = 0;
    for (var x = 1; x <= i; x++) {
      var first = Math.pow(x, 3);
      for (var y = x+1; y <= i; y++) {
        var second = Math.pow(y, 3);
        var sum = first + second;
        if (sum === i) {
          count ++;
          if (count === n) {
            return i;
          }
        }
      }
    }
  }
}
console.time('count');
console.log(HRnumber(n));
console.timeEnd('count');
