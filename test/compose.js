
var _ = require('..');

function add(x, y) { return x + y; }
function bytwo(x) { return x * 2; }

exports['compose two simple functions'] = function (test) {
    var fn = _.compose(bytwo, add);
    
    test.ok(fn);
    test.ok(typeof fn == 'function');
    test.equal(fn(2, 3), 10);
};

