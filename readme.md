# Purpose

Objective is to compare generator versus closure functions.

# Insipiration

The idea for this came when looking at a coding challenge that in part requires one to iterate through the an entire 2D Array except for the borders.  For example, in the array below only the 5 would be iterated on because every other element touches the border.
```javascript
[
    [1,2,3]
    [4,5,6]
    [7,8,9]
]
```
Planning out the helper function led to 2 different ways to make a function that could traverse the inside of an array: (1) generator and (2) closure (function returning function where the returned function has access to the execution context's scope).  

# Execution 

The generator and closure are written to act as an iterator where the first call returns the first element and so on: until all elements are iterated through.

## generatorVclosure Module 
- `Function generatorGetInner` implements the generator with a minimum input of 3x3 2D Array 
- `Function closureGetInner` implements the closure with a minimum input of 3x3 2D Array
- `Function generateSymmetricArray` generates a 2D Array of ints that is equal height and width
- `Function validateArraySymmetry` validates the array passed as an argument is equal height and width

## unit_test Module
- `Function generateExpectedArray` generates a flat array version of a 2D Array to dynamically create all values the closure and generator functions will iterate through
- Unit test iterates from 2D Array of 3x3 to 15x15 testing both generator and closure implementations

## performace Module
- Using console time methods, the time to completion of iteration through a 2D Array is measured for both generator and closure implementations

# Results

Without question, the closure implementation is much faster than the generator

With a 2D Array of size 1000 x 1000
- Generator averaged ~33 miliseconds
- Closure averaged ~ 10 miliseconds 

With a 2D Array of size 10,000 x 10,000
- Generator averaged ~2.3 seconds 
- Clsoure average ~ .59 seconds

# Conclusion

It's important to know fundamental JS patterns because closure remains a powerful and fast design pattern.  Generators are slow, and similar functionality can programmed with a better performing closure.  Would recommend avoiding using generators in the backend where the server has to constantly use an iterator/generator/clsoure function

