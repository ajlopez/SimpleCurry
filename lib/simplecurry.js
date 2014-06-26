

var simplecurry = (function() {
    function curry(fn) {
        var arity = fn.length;
        var args = [];
        
        return currifier(fn, arity, args);
    }
    
    function partial(fn) {
        var nargs = arguments.length;
        var cfn = curry(fn);
        
        if (nargs <= 1)
            return cfn;
            
        return cfn.apply(null, Array.prototype.slice.call(arguments, 1));
    }
    
    function compose() {
        var fns = Array.prototype.slice.call(arguments);
        var l = fns.length;
        
        return function () {
            var args = arguments;
            
            for (var k = l; k--;)
                args = [fns[k].apply(null, args)];
                
            return args[0];
        }
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
        curry: curry,
        partial: partial,
        compose: compose
    }
})();
    
if (typeof window === 'undefined')
	module.exports = simplecurry;
