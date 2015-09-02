var ep1 = { title: "ep1", desc: "peter, marc", num: 1, rate: 8.5 };
var ep2 = { title: "ep2", desc: "jon, peter", num: 2, rate: 7.7 };
var ep3 = { title: "ep3", desc: "marc, jon", num: 3, rate: 8.7 };

var eps = [ep2, ep3, ep1];

// Sort by episode number
eps.sort(function (ep1, ep2) {
  return ep1.num - ep2.num;
});

function repeat(str, n) {
  var sn = "";
  for (var i=0; i<n; i++) sn += str;
  return sn;
}

function stars(rate) {
  return repeat("*", Math.floor(rate));
}

function show(ep) {
  console.log(ep.title + " " + ep.rate + " " + stars(ep.rate))
}

console.log("-- good:");

var good = eps.filter(function (ep) {
  return ep.rate >= 8;
});

good.forEach(function (ep) {
  show(ep);
});

console.log("-- with Jon:");

var jon = eps.filter(function (ep) {
  return ep.desc.indexOf("jon") >= 0;
});

jon.forEach(function (ep) {
  show(ep);
});
