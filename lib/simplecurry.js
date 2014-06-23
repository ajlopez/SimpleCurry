

var simplecurry = (function() {
    function curry(fn) {
        var arity = fn.length;
        var args = [];
        
        return currifier(fn, arity, args);
    }

    function currifier(fn, arity, args) {
        return function () {
            var newargs = args.slice();
            var l = newargs.length;
            
            for (var k = 0; k < arguments.length; k++) {
                for (var j = 0; j < l; j++) {
                    if (newargs[j] === simplecurry) {
                        newargs[j] = arguments[k];
                        break;
                    }
                }
                
                if (j >= l)
                    newargs.push(arguments[k]);
            }

            if (newargs.length >= arity)
                return fn.apply(null, newargs);
                
            return currifier(fn, arity, newargs);
        }
    }

    return {
        curry: curry
    }
})();
    
if (typeof window === 'undefined')
	module.exports = simplecurry;
