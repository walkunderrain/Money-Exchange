// PLEASE DON'T change function name
module.exports =
function makeExchange(currency) {
    // var object = {};
    // var H = object.H;
    // var Q = object.Q;
    // var D = object.D;
    // var N = object.N;
    // var P = object.P;
    // var er = object.error;
    //
    // var h = currency / 50;
    // if (currency > 10000){ return er = "You are rich, my friend! We don't have so much coins for exchange"};
    // if (currency == 0){return {}};
    // if ( h > 0){ var res1 = currency % 50; return H = h} else {
    //   var q = res1 / 25;
    //   if (q > 0){ var res3 = res1 % 25; return Q = q } else {
    //     var d = res3 / 10;
    //     if (d > 0){ var res4 = res3 % 10; return D = d} else {
    //       var n = res4 / 5;
    //       if (n > 0){ var res5 = res4 % 5; return N = n} else {
    //         var p = res5 / 1;
    //         if (p > 0){ return oP = p}
    //       }
    //     }
    //   }
    // }
    //
    // return object;


    var errorMessage = "You are rich, my friend! We don't have so much coins for exchange";
    if (currency > 10000) {
      return {error: errorMessage};
    }
    object = {}
    if (currency <= 0) {
      return object;
    }
    var h = Math.floor(currency / 50);
    if (h > 0) {
      object.H = h;
    }
    var q = Math.floor(currency % 50 / 25);
    if (q > 0) {
      object.Q = q;
    }
    var d = Math.floor(currency % 50 % 25 / 10);
    if (d > 0) {
      object.D = d;
    }
    var n = Math.floor(currency % 50 % 25 % 10 / 5);
    if (n > 0) {
      object.N = n;
    }
    var p = Math.floor(currency % 50 % 25 % 10 % 5);
    if (p > 0) {
      object.P = p;
    }
    return object;
}

// console.log(makeExchange(0))  ;
