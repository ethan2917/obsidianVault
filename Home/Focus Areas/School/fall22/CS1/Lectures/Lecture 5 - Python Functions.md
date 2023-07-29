## Reading
- Chapter 3 of *Practical Programming*
## Why Functions?
- Repeating code is **PAINFUL**
- Programmers motto: **DRY- DONT REPEAT YOURSELF**
- Define it once and use it multiple times.
- Functions are extremely useful for writing complex programs.
	- They divide these complex programs into simpler steps.
	- They make programs easier to read and debug by abstracting out frequently repeated code.
## A Function to Compute the Area of a Circle
>>>def area_circle(radius):
>>>	pi = 3.14159
>>>	area = pi \* radius\*\*2
>>>	return area
- Note that `def` is not indented and the other lines are indented four spaces.
- We add unindented code below the definition of `area_circle()`
>>>a = area_circle(1)
		print(a)
		print('A circle with radius 2 has area {:.2f}'.format(area_circle(2)))
		r = 75.1
		a = area_circle(r)
		print("A circle with radius {:.2f} has area {:.2f}".format(r,a))
- Important syntax includes:
	- Use of the keyword `def` and the `:` to indicate the start of the function.
	- Indentation for the lines after the `def` line.
	- Unindented lines for code outside the function to indicate the end of the function.
### What Does Python Do when We Run This Code?
- We can visualise this using `http://www.pythontutor.com`.
1. Reads the keyword `def` and notes that a function is being defined.
	- The line that starts with `def` is called the function *header*.
2. Reads the rest of the function definition, checking its syntax.
3. Notes the end of the definition when the unindented code is reached.
4. Sees the function call inside the assignment statement.
	`a = area_circle(1)`
at whats known as the "top level" or "main level" of execution and
	- Jumps back up to the function
	- Assigns 1 to the parameter `radius`.
	- Runs the code inside the function using `radius` as a variable inside the function.
	- Returns the result of the calculation back to the top level and assigns the value 3.14159 to the variable `a`.
5. Repeats the process of running the function at the second `print()`, this time with the parameter value 2 and therefore a new value for `radius` inside the function.
6. Repeats the process of running the function right after we reassign `a`, this time with parameter value 75.1 taken from the variable `r`.
### Flow of Control
- The "flow of control" of Python here involves:
	- Reading the function definition without executing the function.
	- Seeing a "call" to the function without executing the function.
	- Returning the result of the back to the place in the program that called the function and continuing the execution.
## Arguments, Parameters and Local Variables
- *Arguments* are the values 1, 2 and 75.1 in our above examples.
- These are each passed to the *parameter* called `radius` named in the function header. This parameter is used just like a variable in the function.
- The variable `pi` and `area` are *local variables* to the function.
- Neither `pi` nor `radius` nor `area` exists at the top / main level. At this level, they are ‘’undefined variables’’.
## Computing the Surface Area of A Cylinder Using Two Functions
>>>import math
		def area_circle(radius):
		    return math.pi * radius ** 2
		def area_cylinder(radius,height):
		    circle_area = area_circle(radius)
		    height_area = 2 * radius * math.pi * height
		    return 2\*circle_area + height_area
		print('The area of a circle of radius 1 is', round(area_circle(1),2))
		r = 2
		height = 10
		print('The surface area of a cylinder with radius', r)
		print('and height', height, 'is', round(area_cylinder(r,height),2))
- Flow of control proceeds in two different ways here:
	1. Starting at the first `print()` function call at the top level, into `area_circle()` and back.
	2.  At the third `print()`
	    1.  into `area_cylinder()` 
	    2.  into `area_circle()`
	    3.  back to `area_cylinder()`, and
	    4.  back to the top level (and then into `round()` and finally into `print()`).
## Program Structure
- First a comment describing the program.
- Second, all import statements.
- Third, all function definitions.
- Fourth, the main body of your program.