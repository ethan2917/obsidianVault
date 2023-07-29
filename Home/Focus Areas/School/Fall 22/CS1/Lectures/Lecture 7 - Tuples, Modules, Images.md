## Overview
We will studt a module called *pillow* which is specifically designed for this data type.
## Tuple Data Type
- A *tuple* is a simple data type that puts together multiple valyes as a single unit.
- A Tuple allows you to access individual elements: first value starts at zero.
`x = (4, 5, 10)`
`print(x[0])`
`4`
`print(x[2])`
`10`
`len(x)`
`3`
- Tuples and strings are similar in many ways.
- Just like strings you cannot change a part of the tuple; you can only only change the entire tuple.
### What Are Tuples Good For?
- Tuples are Python's way of making multiple asignments.
`>>> 2,3`
`(2, 3)`
`>>> x = 2,3`
`x`
`(2, 3)`
`>>> a,b=x`
`>>> a`
`2`
`>>> b`
`3`
`>>> c,d=3,4`
`>>> c`
`3`
`>>> d`
`4`
- You can write functions that return multiple values.
  `def split(n):`
	  `''' Split a two-digit number into its tens and ones digit '''`
	  `tens = n // 10`
	  `ones = n % 10`
	  `return (tens, ones)`
  `x = 83`
  `ten,one = split(x)`
  `print( x, "has tens digit", ten, "and ones digit", one)`
- Output:
  `83 has tens digit 8 and ones digit 3`
- We can do the reverse, passing a tuple to a function.
  `def combine( digits ):`
	  `return digits[0]*100 + digits[1]*10 + digits[2]`
  `d = (5, 2, 7)`
  `print( combine(d))`
- Output:
  `527`
## Basics of Modules
- A module is a collection of Python variables, functions and objects, all stored in a file,
- Modules allow code to be shared across many different programs.
- Before we we can use a module, we need to import it.
  `import module_name`
  `module_name.function(arguments)`
### Area and Volume Module
-  