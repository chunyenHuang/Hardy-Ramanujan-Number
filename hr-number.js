console.log('Hardy–Ramanujan Number');

function HRnumber() {
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
          if (count === 2) {
            return i;
          }
        }
      }
    }
  }
}
console.time('count');
console.log(HRnumber());
console.timeEnd('count');
