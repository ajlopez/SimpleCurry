
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

exports['call functions with three arguments one by one'] = function (test) {
    var fn = _.curry(function (x, y, z) { return x + y * z; });
    test.equal(fn(1)(2)(3), 7);
};

exports['call functions with three arguments applying skip'] = function (test) {
    var fn = _.curry(function (x, y, z) { return x + y * z; });
    var fn2 = fn(_,2);
    test.equal(fn2(1,3), 7);
};

