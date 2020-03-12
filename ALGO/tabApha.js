var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
var voy = "aeiouy".split("");
var cons = [];

for (var i = 0; i < alpha.length; i++) {
  if (!voy.includes(alpha[i])) {
    cons.push(alpha[i]);
  }
}

function remplaceVs(a, b) {
  let ta = a[0].split("");
  let tb = b[0].split("");
  let tv = [];
  let tcs = [];

  tv = ta.filter(el => voy.includes(el));
  tcs = tb.filter(el => cons.includes(el));
  ta = ta.filter(el => !tv.includes(el));
  tb = tb.filter(el => !tcs.includes(el));
  tv.forEach(el => {
    tb.push(el);
  });
  tcs.forEach(el => {
    ta.push(el);
  });

  return { ta, tb };
}

console.log(remplaceVs(["aniki"], ["parrain"]));
