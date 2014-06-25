
var _ = require('..');

function fnadd(x, y) { return x + y; }

exports['partial apply'] = function (test) {
    var add1 = _.partial(fnadd, 1);
    
    test.ok(add1);
    test.ok(typeof add1 == 'function');
    test.equal(add1(2), 3);
};
