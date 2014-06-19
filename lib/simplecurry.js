
function curry(fn) {
    var arity = fn.length;
    var args = [];
    
    return currifier(fn, arity, args);
}

function currifier(fn, arity, args) {
    return function () {
        var newargs = args.slice();
        
        for (var k = 0; k < arguments.length; k++)
            newargs.push(arguments[k]);

        if (newargs.length >= arity)
            return fn.apply(null, newargs);
            
        return currifier(fn, arity, newargs);
    }
}

module.exports = {
    curry: curry
}
