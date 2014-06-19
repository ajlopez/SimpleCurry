
var _ = require('..');

function fnadd(x, y) { return x + y; }

exports['curryfy add'] = function (test) {
    var add = _.curry(fnadd);
    
    test.ok(add);
    test.ok(typeof add == 'function');
};