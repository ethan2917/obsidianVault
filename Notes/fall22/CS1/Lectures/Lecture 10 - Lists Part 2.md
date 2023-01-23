## List Aliasing
- Consider the following code:![[Pasted image 20220929141316.png]]
- L1 and L2 reference the same list - they are _aliases_ of each other and the underlying list - so changes made using either name change the underlying list.
- L3 references a different list that just happens to have the same string values in the same order: there would have been no confusion if the strings in the list had been different.
- Python uses aliases for reasons of efficiency: lists can be quite long and are frequently changed, so copying of entire lists is expensive.
- Also true for _container_ data types.
- If we truly want to copy a list, Pythone provides a `copy()` method for lists.![[Pasted image 20220930145750.png]]
### Aliasing and Function Parameters
- When a variable is passed to functions, a copy of its value is created if the value is a number or a booleans:![[Pasted image 20220930145913.png]]
- 