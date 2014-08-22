# SimpleCurry

Simple sauce for functional JavaScript: currying, partial application.

## Installation

Via npm on Node:

```
npm install simplecurry
```

## Usage

Reference in your program:

```js
var _ = require('simplecurry');

// Currying a function
var add = _.curry(function (x, y) { return x + y; });

// Apply all arguments
add(1, 2); // 3

// Apply arguments one by one
add(1)(2); // 3

// Partial apply first argument
var add1 = add(1);
add1(2); // 3

// Partial apply to function
function add(x, y) { return x + y; }
var add1 = _.partial(add, 1);
add1(3); // 4
```

## To Do

- Adapt to browser
- Partial apply skipping argument using `_`
- Test more use cases

## Development

```
git clone git://github.com/ajlopez/SimpleCurry.git
cd SimpleCurry
npm install
npm test
```

## Samples

TBD

## References

- [Python Funcy](https://github.com/Suor/funcy)
- [Simple Currying In Javascript](http://blog.zakhour.me/post/javascript/simple-currying-in-javascript/)

## Versions

- 0.0.1 Published

## License

MIT

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleCurry) and submit
[pull requests](https://github.com/ajlopez/SimpleCurry/pulls) — contributions are
welcome<

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

