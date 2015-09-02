function av(s, sep) {
  var ss = s.split(sep);
  var sum = ss.reduce(function (a,b) {
    return a + parseInt(b);
  }, 0);
  return sum/ss.length;
}

console.log(av("10:20:60", ":"));
