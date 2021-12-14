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
