## Subject: [[Crash Course in C++]]
## Tags:
#dataStructures #crashCourse #computerScience #variables #syntax #cplusplus #spring23
## Date: 2023-01-10
## Lecture: Lesson 1 Types Variables;

## Notes:
### Variables and Types
#### Identifiers
- A valid identifier is a qsequence of one or more letters, digits, or underscore characters.
	- Spaces, punctuation marks, and symbols cannot be apart of identifiers.
	- Identifiers always begin with a letter.
		- They can also begin with an underline.
			- Although these are typicall reserved for compiler-specific keywords or external identifiers.
	- In no case can they begin with a digit,
- List of keywords already used to identify operations and data descriptions:
	- `alignas, alignof, and, and_eq, asm, auto, bitand, bitor, bool, break, case, catch, char, char16_t, char32_t, class, compl, const, constexpr, const_cast, continue, decltype, default, delete, do, double, dynamic_cast, else, enum, explicit, export, extern, false, float, for, friend, goto, if, inline, int, long, mutable, namespace, new, noexcept, not, not_eq, nullptr, operator, or, or_eq, private, protected, public, register, reinterpret_cast, return, short, signed, sizeof, static, static_assert, static_cast, struct, switch, template, this, thread_local, throw, true, try, typedef, typeid, typename, union, unsigned, using, virtual, void, volatile, wchar_t, while, xor, xor_eq`
- C++ is a *case sensitive* language.
	- An identifier written in all caps is different than another one with the same name written in lower case.
		- `RESULT` is different from `result`.

#### Fundamental Data Types
- `bool`: Stores either True or False.
- `char`: Typically one single octet.
- `int`: The most natural integer size for the machine. **1**
- `float`: A single-precision floating point value. **1.2**
- `double`: A double-precision floating point value. **1.23** 
- `void`: Representsa the absence of type.
- `wchar_t`: A wide character type.

#### Variable Declaration and Initialization
##### In the following Example Variables Have Been Declared at the Top, but Initialized within the Main Function.
```c++
#include <iostream>
using namespace std;

// Variable declaration:
extern int a, b;
extern int c;
extern float f;
  
int main () {
   // Variable definition:
   int a, b;
   int c;
   float f;
 
   // actual initialization
   a = 10;
   b = 20;
   c = a + b;
 
   cout << c << endl ;

   f = 70.0/3.0;
   cout << f << endl ;
 
   return 0;
}
```

##### An Example on Function Declaration and Initialization
```c++
// function declaration
int func();
int main() {
   // function call
   int i = func();
}

// function definition
int func() {
   return 0;
}
```
- The function name is declared at the top but it is not actually initialized until the bottom of the code where it is given a value 0.

### Lvalues and Rvalues
- `lvalue`: Expressions that refer to memory location is called **lvalue**. An **lvalue** may appear as either the left-hand or right-hand side of an assignment.
- `rvalue`: The term **rvalue** refers to a data value that is stored at some address in memory. An **rvalue** is an expresasion that cannot have a value assigned to it which means an **rvalue** may appear on the right but not the left.
	- Numeric literals are **rvalues** and so may not be assigned and can not appear on the left-hand side.
- The following is a valid statement:
```c++
int g = 20;
```
- But the following is not a valid statement:
```c++
10 = 20;
```

### Escape Sequences
| Escape Sequence | Meaning                             |
| --------------- | ----------------------------------- |
| \\\\            | \\ character                        |
| \\'             | ' character                         |
| \\"             | " character                         |
| \\?             | ? character                         |
| \\a             | Alert or bell                       |
| \\b             | Backspace                           |
| \\f             | Form feed                           |
| \\n             | Newline                             |
| \\r             | Carriage return                     |
| \\t             | Horizontal tab                      |
| \\v             | Vertical tab                        |
| \\ooo           | Octal number of one to three digits |
| \\xhh...        | Hexadecimal number of one or more digits                                    |
- The following series of escape sequences produces `Hello    World`:
```c++
#include <iostream>
using namespace std;

int main() {
   cout << "Hello\tWorld\n\n";
   return 0;
}
```

### Literals
- Literal constants are used to express particular values within the source code of a program.
	- In `a = 5;` the 5 is a literal constant.
	- Literal constants can be classified into: **integer**, **floatin-point**, **characters**, **strings**, **Boolean**, **pointers**, and **user-defined literals**.

#### Integer Numerals
```c++
1776
706
-
```
- These are numerical constants that identify integer values.
- Notice that they are not enclosed in quotes or any other special character.
	- They are a simple succession of digits representing a whole number in decimal base.
- In addition to decimal numbers, C++ also allows the use of other literal constants.
```c++
75         // decimal
0113       // octal
0x4b       // hexadecimal
```

#### Literal Constant Types
| Suffix   | Type modifier |
| -------- | ------------- |
| u or U   | unsigned      |
| l or L   | long          |
| ll or LL | long long              |
- Unsigned may be combined with any of the other two in any order to form `unsigned long` or `unsigned long long`.
- For example:
```c++
75         // int
75u        // unsigned int
75l        // long
75ul       // unsigned long 
75lu       // unsigned long 
```

#### Floating Point Numerals
```c++
3.14159    // 3.14159
6.02e23    // 6.02 x 10^23
1.6e-19    // 1.6 x 10^-19
3.0        // 3.0  
```
- These are four valid numbers with decimals expressed in C++.
- The default type for floating-point literals isa `double`. Floating-point literals of type `float` or `long double` can be specified by adding one of the following suffixes:
| Suffix | Type  |
| ------ | ----- |
| f or F | float |
| l or L | long double      |
- For example:
```c++
3.14159L   // long double
6.02e23f   // float  
```
