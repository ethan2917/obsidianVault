Continuing the use of a bank account as an example.
- The variable `balance` in base class is `protected`.
	- `balance` is not publicly accessible outside the class, but it is accessible in the derived classes.
	- if it was declared as `private` then member functions from derived classes would not be able to access it.