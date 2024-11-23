# Description - Topic Overview and Actualization

Welcome to this interesting lesson! We're going to explore JavaScript array methods, specifically: forEach(), map(), filter(), reduce(), and find().

## Understanding the Role of Array Methods

JavaScript arrays can store multiple values. Array methods enable us to perform operations such as modifying or searching array elements. To call array methods, you use dot-notation on the array. For example: arrayVar.arrayMethod(func).

Array Methods accept a function as a parameter using the => operator. For example: arrayVar.arrayMethod( (functionParameters) => /_ function code _/ )

## Looping Through Data with forEach()

To inspect each element in an array, we use the forEach() method, which runs a function on each array element.

```
const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris'];
stars.forEach((star) => {
    console.log(star); // prints star names one by one
});

/* Prints
Sirius
Vega
Rigel
Polaris
*/

stars.forEach((star, index) => {
    console.log(star, index); // prints star names along with their indices in the array
});

/* Prints
Sirius 0
Vega 1
Rigel 2
Polaris 3
*/
```

The forEach() method accepts a function as a parameter, using the => operator, and runs the function on each element of the array. If we just want the value of each element in the array, we specify the input to our function as just (star). If we want the value of each element and its index, we specify the input as (star, index).

## Transforming Data with map()

The map() method transforms data and creates a new array based on the results of a function.

Just like forEach(), map takes in a function as an input. map() returns an array where each element is the value returned by calling our function on that element.

```
const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris'];
const brightStars = stars.map((star) => {
    return star + ' is very bright!';
});
console.log(brightStars); // prints star names with added info
// Prints ['Sirius is very bright!', 'Vega is very bright!', 'Rigel is very bright!', 'Polaris is very bright!']
```

## Filtering Data with filter()

The filter() method creates a new array with only the elements that pass a condition. In this case, let's filter out elements that are at even indices.

```
const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris', 'Betelgeuse'];
const evenIndexedStars = stars.filter((star, index) => {
    return index % 2 === 0;
});
console.log(evenIndexedStars); // prints ['Sirius', 'Rigel', 'Betelgeuse']
```

In the above code, the filter() method is used on the stars array. It checks the index of each element, and if the index is even (as checked by index % 2 === 0, meaning the remainder of dividing the index by 2 is 0), that element is included in the new evenIndexedStars array. As a result, evenIndexedStars includes the stars 'Sirius', 'Rigel', and 'Betelgeuse', which were at the 0th, 2nd, and 4th positions, respectively, in the original stars array.

## Summarizing Data with reduce()

The reduce() method applies a function to each array element and combines them into a single output.

reduce() accepts 2 parameters. A function, and an initial value. The function must take in a runningTotal and currentElement parameters. The runningTotal starts at initialValue. Inside the function, currentElement is used to update runningTotal.

In the example below: the initial value is 0. For each element in the array, the element number is added to total.

```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);
console.log(sum); // prints total sum of numbers
```

## Finding Data with find()

The find() method returns the first element that satisfies a particular function.

```
const numbers = [1, 3, 5, 2, 4, 6];
const firstEvenNumber = numbers.find((num) => {
    return num % 2 === 0;
});
console.log(firstEvenNumber); // prints 2, the first even number
```

In this example, the find() method operates on the numbers array. It goes through each number in the numbers array until it finds a number where the condition num % 2 === 0 is true (i.e., the number is even). The find() method then immediately returns that number. If no number satisfies the condition, find() will return undefined. In this case, the first even number in the numbers array is 2, so that's what's logged to the console.

## Lesson Summary

Great job! You've learned how to use forEach() for looping, map() for transforming, filter() for filtering, reduce() for summarizing, and find() for searching data in an array! Prepare for the upcoming practice exercises to consolidate your learning. Let's continue exploring!
