## While Loops
### Part 1: The Basics
- In Python, `while` loops are more general because you can always write a `for` loop using a `while` loop.
- We will start `while` loops first and then see how we can simplify common tasks with `for` loops later.
#### Basics of While
- Our first `while` loop just counts numbers from 1 to 9, and prints them.
  `i=1`
  `while i<10`
	  `print(i)`
	  `i += 1 ## if you forget this, your program will never end`
- General form of a `while`loop:
  `block a`
  `while condition:`
	  `block b`
  `block c`
- Steps:
	1. Evaluate any code before `while` (block a)
	2. Evaluate the `while`loop condition:
		1. If it is `True`, evaluate `block b`, and then repeat the evaluation of the condition.
		2. If it is `False`, end the loop, and continue with the code after the loop `block c`.
- In other words, the cycle of evaluating the condition followed by evaluating the block of code continues until the condition evaluates to `False`.
- An important issue that is sometimes easy to answer and sometimes very hard to answer is to know that your loop will always terminate.
## Using Loops with Lists
![[Pasted image 20220926141513.png]]
### Accumulation of Values
- Often, we use loops to accumulate some type of information such as adding all the values in a list.
- Let's change the loop to add numbers from 1 to 9.
 ![[Pasted image 20220926141852.png]]
- Let's use a loop to add the numbers in a list. The loop will generate indexes for the list. So, the loop must generate numbers from 0 to length of the list. ![[Pasted image 20220926142546.png]]
## Loops That End on Other Conditions
![[Pasted image 20220926142806.png]]
## Multiple Nested Loops
- Loops and if statements can both be nested. We've already seen this for if statements.
- Here's an example where we print every pair of values in a list. ![[Pasted image 20220926142918.png]]
- The solution prints the values from the same pair of indices twice - e.g. the pair 21, 12 is printed once when i=1, j=2 and once when i=2, j=1.
## Summary
- Loops are especially useful for iterating over a list, accessing its contents, and adding or counting the values from a list. THis is done in the `sum()` and `len()` functions of Python.
- Each loop has a stopping condition- the boolean expression in the *while* statement. The loop will end when the condition evaluatesto *True*.
- If the stopping condition is never raeched, the loop will become "infinite".
- Often a counter variable is used. It (a) is given an initial value before the loop starts, (b) is incremented (or decremented) once in each loop iteration, and (c) is used to stop the loop when it reaches the index of the end (or beginning) of the list.