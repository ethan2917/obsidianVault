## Program Structure
- Programming requires four basic skills:
	1. Develop a solution
		- Start with small steps, solve them, and then add complexity.
	2. Structure your code.
		- Move repeated code into functions
		- Make your code easy to read and modify. Use meaningful variable names and break complex operations into smaller parts.
		- Place values in variables so they are easy to change.
		- Include comments for important functions, but do not clutter your code with unnecessary comments. A classic example of a completely unnecessary comment is `x += 1 #increment x`.
		- Document assumptions about what is passed to a function.
		- If your function is meant to return a value, make sure it always does.
	3. Test your code.
		- Find all possible cases that your program should handle, including typos in the input. As programs get larger, this is increasingly hard.
		- If you cannot check for all inputs, then you must then check your code for meaningful inputs: regular (expected inputs) and edge cases (inputs that can break your code).
	4. Debug your code
		- Never assume an untested part of your code is bug free. “If it ain’t tested, it’s broken.”
		- Learn syntax well so that you can spot and fix syntax errors fast.
		- Semantic errors are much harder to find and fix. You need strategies to isolate where the error is.
		- Print output before and after crucial steps.
		- Look at where your program crashed.
		- Fix the first error first, not the biggest error. The first error may be the cause of bigger errors later in your code.
		- Use a debugger.
		- Simplify the problem: remove (by commenting out) parts of your code until you no longer have an error. Look at the last code removed for a source of at least part of your errors.
		- Test parts of your code separately and once you are convinced they are bug free, concentrate on other parts.
### Help With Debugging
- Consider the following code to add the first `n` integers:![[Pasted image 20221003140959.png]]
- Does it work? For all inputs? Might it run forever?
- How might we find such an error?
	- Careful reading of the code.
	- Insert print statements.
	- Use the Spyder IDE debugger.
### Program Organization
- Envision your code as having two main parts: the main body and the functions that help the main code.
- Make sure your functions accomplish one well0defined task.
## Part 2: Extemded Example of a Random Walk
- Python includes a module to generate numbers at random. For example,![[Pasted image 20221003141531.png]]
- We'd like to use this to simulate a "random walk":
- Hypothetically, a person takes a step forward or backward, completely at random (equally likely to go either way). This can be repeated over and over again until some stopping point is reached. Suppose the person is on a platform with steps and the person starts in the middle, this random forward/backward stepping process is repeated until they fall off (reach step 0 or step)
- “forward” is represented by an increasing step, while “backward” is represented by a decreasing step
- How many steps does it take to fall off?
- Many variations on this problem appear in physical simulations.
- We can simulate a step in several ways:
	1. If random.random() returns a value less than 0.5 step backward; otherwise step forward.
	2. If random.randint(0,1) returns 1 then step forward; otherwise, step backward.
	3. Eliminate the if entirely and just increment by whatever random.choice([-1,1]) returns (it will return either -1 (step backward) or 1 (step forward)).
- So, in summary, we want to start a random walk at position and repeatedly take a step forward or backward based on the output of the random number generator until the walker falls off. We will solve this problem together during lecture. We we start by enumerating some of the needed steps and then solving them individually before putting together the whole program. Once we see the result we can think of several ways to change things and explore new questions and ideas. Remember, a program is never done!
## Part 3: Review of Boolean Logic
- Values (in Python) are True and False
- Operators Comparisons: <, >, <=, >=, == !=
- Logic: and, or, not
## Truth Tables
- If we have two boolean expressions, which we will refer to as `ex1` and `ex2`, and if we combine their “truth” values using `and` we have the following “truth table” to describe the result ![[Pasted image 20221003150257.png]]
- If we combine the two expressions using `or`, we have![[Pasted image 20221003150339.png]]
- Finally, using `not` we have
  ![[Pasted image 20221003150355.png]] 
### DeMorgan's Laws Relating And, Or, not
- Using `ex1` and `ex2` once again to represent boolean expressions, we have![[Pasted image 20221003150506.png]]
- And, ![[Pasted image 20221003150518.png]]
- Also, distribution laws![[Pasted image 20221003150538.png]]
#### Why Do We Care?
- When we’ve written logical expressions into our programs, it no longer matters what we intended; it matters what the logic actually does.
## Part 4: Additional Techniques in Logic and Decision Making
### Short-Circuited Boolean Expressions
- Python only evaluates expressions as far as needed to make a decision. 
- Therefore, in a boolean expression of the form `ex1 and ex2` `ex2` will not be evaluated if `ex1` evaluates to `False`. 
- Also, in a booean expression of the form `ex1 or ex2`, `ex2` will not be evaluated if `ex1` evalues to `True`.
### Nested If Statements
- We can place `if` statements inside of other `if` statements.![[Pasted image 20221003151018.png]]
### Storing the Result of a Boolean Expression
- Sometimes we store the result of boolean expressions in a variable for later use:![[Pasted image 20221003151048.png]]
- We use this to make code clearer and avoid repeated evaluation of the same expression, especially if the expression requires a lot computation.