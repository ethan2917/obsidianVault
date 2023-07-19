- The functions that Python provices are called *built-in* functions.
- #### Numerical Functions
	- abs() - returns the absolute value of a number.
	- pow() - returns the value of x to the power of y.
	- int() - converts the specified value into an integer.
	- float() - returns a floating-point number for the provided number or string.
	- round() - returns a floating point number that is a rounded version of the specified number, with the specified number of decimals.
	- max() - returns the item with the highest value.
	- min() - returns the item with the lowest value.
- #### Object and Methods
	- All variables are objects. Objects are abstractions.
	- Objects define organization and structure to the date they store.
	- They have operations/functions called methods.
	- `variable.method(arguments)`
	- `help(str)` will display all the methods that apply to an object type.
	- Not all functions on objects are called using ``object.method(arguments)``, some are called using more of a function form and others are called as operators.
- #### Practice Problems (1)
	1. -   Write code that takes a string in a variable called `phrase` and prints the string with all vowels removed.
	2. Create a string and assign it to a variable called `name`. Write code to create a new string that repeats each letter `a` in `name` as many times as `a` appears in `name` (assume the word is all lower case).
	>>> name = "amos eaton"
	
- #### String Format Method
	- The `format()` method provides a nice way to produce clean looking output.
	- `format()` replaces substrings between {} with values from the argument list.
	- {0:.2f} means argument 0, will be formatted as a float with two digits to the right of the decimal place. It applies rounding.
	- We can leave off the 0, the 1, and the 2 from before the : unless we want to change the order of the output.
	- We can leave off the :.2f if we want to accept print’s normal formatting on float outputs.
- #### Built-In Functions
	- `help(__builtins__)`
- #### Modules
	- Modules are collections of functions and constants that provide additional power to Python programs.
	- To use a function in a module, first you must load it into your program using `import`. Let’s see the `math` module:
	  `import math`
  - #### Different Ways of Importing
	  - We can import only a selection of functions and variables:
	    `from math import sqrt,pi`
	  - Or we can give a new name to the module within our program:
	  `import math as m`
- #### Program Structure
	- We will use the following convention to order the program components:
		- A comment explaining the purpose of the program,
		- All import statements
		- Then all the variables and input commands
		- Then all computation
		- And finally output