## Overview:
-   Example: finding all individuals listed in the Internet Movie Database (IMBD)
-   A solution based on lists
-   Sets and set operations
-   A solution based on sets.
-   Efficiency and set representation
-   Section 11.1 of Practical Programming.

## Finding All Persons in the IMDB File:
- We are given a file extracted from the Internet Movie Database (IMDB) called imdb_data.txt containing, on each line, a person’s name, a movie name, and a year. For example,
  Kishiro, Yukito | Battle Angel | 2016
- Goal:
	- Find all persons named in the file
	- Count the number of different persons named
	- Ask if a particular person is named in the file
	- The challenge in doing this is that many names appear multiple times.
	- First solution: store names in a list. We’ll start from the following code, `lec15_find_names_start.py`.
	    `imdb_file = input("Enter the name of the IMDB file ==> ").strip()``
	    `name_list = []`
	    `for line in open(imdb_file, encoding = "ISO-8859-1"):`
	        `words = line.strip().split('|')`
	        `name = words[0].strip()`
	and complete the code in class.
	
## Sets:
- A Python set is an implementation of the mathematical notion of a set.
- No order to the values (no indexing)
- Contains no duplicates
- Contains whatever type of values we wish; including values of different types.
- Python set methods are exactly what you would expect.
- Each has a function call syntax and many have operator syntax in addition.
### Set Methods:
- Initialization comes from a list, a range, or from just set():
  **s1 = set()**
  set()
  **s2 = set(range(0,11,2))**
  {0, 2, 4, 6, 8, 10}
  **v = [4, 8, 4, 'hello', 32, 64, 'spam', 32, 256]**
  **len(v)**
  9
  **s3 = set(v)**
  **s3**
  {32, 64, 4, 'spam', 8, 256, 'hello'}
  
### The Actual Methods Are:
- s.add(x) - add an element if it is not already there
- s.clear() - clear out the set, making it empty
- s1.difference(s2) - create a new set with the values from s1 that are not in s2.
  Python also has an "operator syntax" for this:  
  s1 - s2
- s1.intersection(s2) - create a new set that contains only the values that are in both sets. Operator syntax:  
  s1 & s2
- s1.union(s2) - create a new set that contains that values that are in either set. Operator syntax:  
  s1 | s2
- s1.issubset(s2) - are all elements of s1 also in s2? Operator syntax:  
  s1 >= s2
- s1.issuperset(s2) - are all elements of s2 also in s1? Operator syntax:  
  s1 > s2
- s1.symmetric_difference(s2) — create a new set that contains values that are in s1 or s2 but not in both.
  s1 ^ s2
      x in s - evaluates to True if the value associated with x is in set s.
- We will explore the intuitions behind these set operations by considering
	- s1 to be the set of actors in comedies,
	- s2 to be the set of actors in action movies and then consider who is in the sets
		s1 - s2
		s1 & s2
		s1 | s2
		s1 ^ s2
	
