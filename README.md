```
How to take arguments in sum function?
```

```
function sum() {
return args.reduce((sum, current) => {
return sum + current;
});
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

Here is the [solution](1.arguments_sum_function.js)

```
How to pass arguments in sum function?
```

```
function sum(x, y, z) {
return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

Here is the [solution](2.pass_arguments_sum_function.js)

```
Swapping Values using the Destructuring Assignment
```

```
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```

Here is the [solution](3.swapping.js)
