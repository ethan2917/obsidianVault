## Lists Are Sequences of Values
- Gather together values that have common .
- Notes on syntax:
	- Begin witj `[` and end with `]`.
	- Commas separate the individual calues.
	- The spaces between the values are only used for clarity reasons.
	- Any type of objected can be stored and mixed in a list.
- `planets = [ 'Mercury', 'Venus', 'Earth', 'Mras', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto' ]`
### Why Bother?
- Gather common values together, providing them with a common name, especially when we don't know how many values we will have.
- Apply an operation to values as a group.
- Apply an operation to each value in the grop.
- Examples of computation on lists:
	- Average and Standard Deviation
	- Which values are above and below the average.
	- Correct mistakes.
	- Remove values.
	- Look at differences.
## Accessing Inividual Values - Indexing
- Notice that we made a mistake in typing `Mras`. How do we fix this?
- `print(planets[1])`
  Accesses and prints the string at index 1 of the list `planets`.
- Each item/value is associated with a unique index.
-  Indexing starts at 0.
- What is the last index in `planets`?
	- We can find the length using `len()`:
	  `len(planets)`
	- To find the last index do:
	  `len(planets)-1`
## Changing Values in the List
- `planets[3] = 'Mars'`
  This makes item 3 of `planets` now refer to the string `Mars`.
- Strings are similar in many ways.
  `s = abc`
  `s[0]`
  `'a'`
  `s[1]`
  `'b'`
- But you cannot change part of the string!
## All Indices Are Not Allowed
- If `t` is a list, then the items are stored at indices from 0 to `len(t)-1`.
- If you try to access indices at `len(t)` or beyond, you get a run-tie error.
- If you access negative indices:
  `print(planets[-1])
  `pluto`
  - For any list `t`, if `i` is an index from 0 to `len(t)-1` then `t[i]` and `t[i-len(t)]` are on the same spot in the list.
## Functions on Lists: Computing the Average
- There are many functions (methods) on lists. We can learn about them using the help command.
- The basic functions `max`, `sum`, and `min` may be applied to lists as well.
- This gives us a simple way to compute the average of our list of scores.
  `print("Average Scores = {:.2f}".format( sum(scores) / len(scores) ))`
  `Average Scores = 62.29`
  `print("Max Score =" max(scores))`
  `Max Score = 68`
  `print("Min Score =", min(scores))`
  `Min Score = 58`
## Functions that Modify The Input: Sorting a List
- We can also sort the values the in a list by sorting it:
  `scores = [ 59, 61, 63, 63, 68, 64, 58 ]`
  `new_scores = sorted(scores)`
  `>>> scores`
  `[ 59, 61, 63, 63, 68, 64, 58 ]`
  `>>> new_scores`
  `[58, 59, 61, 63, 63, 64, 68]`
## More Functions: Appending Values, Inserting Values, Deleting
- `append()`, `insert()`, `pop()`, and `remove()` are fundamental to any "container" - an object type that stores other objects.
## Lists of Lists
- Lists can contain any mixture of values, including other lists.
- `L = [ 'Alice', 3.75, ['MATH', 'CSCI', 'PSYC' ], 'PA' ]`
	- `L[0]` is the name,
	- `L[1]` is the GPA
	- `L[2]` is a list of courses
	- `L[2][0]` is the 0th course, `'MATH'`
	- `L[3]` is a home state abbreviation