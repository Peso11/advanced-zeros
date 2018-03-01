module.exports = function getZerosCount(number, base) {
  var osn = base;
  var kolvo = number;
  var x1=0;
  var x2=0;
  var x3=0;

  for (var i = 2; i <= base; i++) {
      x2 = 0;
      x3 = number;

      if (osn % i === 0) {
      x1 = 0;
       do {
        osn = parseInt(osn/i);
        x1++;

      }  while (osn % i === 0);

       do {
        x2 = x2 + parseInt(x3/i);
        x3= parseInt(x3/i);
           }  while (x3/i > 0);
      kolvo = parseInt(Math.min(kolvo, x2/x1));
    }
  }
  return kolvo;
}
