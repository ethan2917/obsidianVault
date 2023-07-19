## Initial Example:
- Suppose we a height measurements for two people, Chris and Sandy. We have the tools to write a program that determines which height measurement is greater:
  `chris_height = float(input("Enter Chris's height (in cm): "))`
  `sandy_height = float(input("Enter Sandy's height (in cm): "))`
  `print("The greater height is", max(chris_height,sandy_height))`
- But we don't have the tools yet to *decide* who has the greater height: For this we need *if statements*:
  `if chris_height > sandy_height:
    `print("Chris is taller")`
`else:`
    `print("Sandy is taller")`
## Overview - Logic and Decision Making
- Boolean logic
	- Use in decision making
	- Use in branching and alternatice
- Reading: *Chapter 5 of Practical Programming*
## Part 1: Boolean Values
- Yet another type
- values are only `True` and `False`
- We'll see a series of operations that either produce or use boolean values, including relational operators such as `<`, `<=` and logical operators such as `and` and `or`.
- ## Relational Operators - Less Than and Greater Than
- Comparisons between values to produce a boolean outcome.
- For numerical values, `<`, `<=`, `>`, `>=`, are straightforward:
  `>>>x=17`
  `>>>y=15.1`
  `>>>x<y`
  `False`
  `>>>x<=y`
  `False`
  `>>>x<=17`
  `True`
  `>>>y<x`
  `True`
- The comparison operators may also be used for strings but the results are surprising:
  `>>>s1='art'`
  `>>>s2='Art'`
  `>>>s3='Music'`
  `>>>s4='music'`
  `>>>s1<s2`
  `False`
  `>>>s2<s4`
  `True`
  `>>>s1<s3`
  `False`
- With strings, the ordering is what's called *lexicographic* rather than purely alphabetical order.
	- All capital letters come before small letters, so strict alphabetical ordering can only be ensured when there is no mixing of caps and smalls.
### Relational Operators: Equality and Inequality
- Testing if two values are equal uses the combined, double-equal symbol `==` rather than the single `=`, which is reserved for assignment.
- Inequality is indicated by `!=`.
## Part 2: if Statements
`if condition:`
	`block1`
`else:`
	`block2`
- where
	- `condition` is the result of a logical expression (a boolean), such as the result of computing the value of a relational operation.
	- `block1` is Python code executed when the condition is `True`.
	- `block2` is Python code executed when the condition is `False`.
- All statements in `block1` and `block2` must be indented the same number of spaces.
- The `block` continues until the indentation stops, and returns to the same level of indentation as the statement starting with `if`.
- The `else:` and `block2` are optional, as the following example shows.
### Elif
`if condition1:`
    `block1`
`elif condition2:`
    `block2`
`else:`
    `block3`
- You do not need to have an `else` block.
- If we leave off the `else:` and block3, then it is possible that none of the blocks are executed.
- You can use multiple `elif` conditions and blocks.
## Part 3: More Complex Boolean Expressions, Starting with and
- A boolean expression involving `and` is `True` if and only if **both** the relational operations produce the value `True`.
### More Complex Boolean Expressions - or
- A boolean expression involving `or` is `True` if ANY of the following occurs:
- The left relational expression is `True`,
- The right relational expression is `True`,
-  **Both** the left and right relational expression are `True`.
-  This is called the *inclusive or* and it is somewhat different from common use of the word *or* in English.
### Boolean Logic - not
- We can also “logically negate” a boolean expression using `not`.
- `if not a<b:``
    `print("a is not less than b")`