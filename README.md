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

```
Upvotes and Downvotes
Given an object containing counts of both upvotes and downvotes, return what vote count should be
displayed. This is calculated by subtracting the number of downvotes from upvotes.
```

```
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

Here is the [solution](4.vote_count.js)

```
50, 30, 20
The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
object that shows how much a person needs to spend on needs, wants, and savings.
```

```
fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":
2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,
"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":
2690 }
```

Here is the [solution](5.50_30_20.js)

```
Create a one-liner function
Create a function that takes an object as an argument and returns a string with facts about the city. The city
facts will need to be extracted from the object's three properties:
```

```
name
population
continent
```

```
The string should have the following format: X has a population of Y and is situated in Z (where X is the city
name, Y is the population and Z is the continent the city is situated in).
```

```
cityFacts({
name: "Paris",
population: "2,140,526",
continent: "Europe",
}); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"
cityFacts({
name: "Tokyo",
population: "13,929,286",
continent: "Asia",
}); // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
```

Here is the [solution](6.population.js)

```

Create a function that takes infinite count of elements, operator and prints their sum. If there's no
operator, then default should be +

```

```

printSum("\*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("\*\*", 2, 3, 2); // 64

```

Here is the [solution](7.operators.js)

```
Frequency Distribution
Create a function that returns the frequency distribution of an array. This function should return an object,
where the keys are the unique elements and the values are the frequency in which those elements occur.
```

```
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
getFrequencies([]) ➞ {}
```

Here is the [solution](8.count.js)

Largest Permutation task on [Hackerrank](https://www.hackerrank.com/challenges/largest-permutation/problem)

Here is the [solution](9.largest_permutation.js)
