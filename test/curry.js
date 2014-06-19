
var _ = require('..');

function fnadd(x, y) { return x + y; }

exports['curryfying add'] = function (test) {
    var add = _.curry(fnadd);
    
    test.ok(add);
    test.ok(typeof add == 'function');
};

exports['partial apply first argument'] = function (test) {
    var add = _.curry(fnadd);
    var add1 = add(1);
    
    test.ok(add1);
    test.ok(typeof add1 == 'function');
    test.equal(add1(2), 3);
};

exports['call with all arguments'] = function (test) {
    var add = _.curry(fnadd);
    test.equal(add(1, 2), 3);
};

exports['call with arguments one by one'] = function (test) {
    var add = _.curry(fnadd);
    test.equal(add(1)(2), 3);
};

