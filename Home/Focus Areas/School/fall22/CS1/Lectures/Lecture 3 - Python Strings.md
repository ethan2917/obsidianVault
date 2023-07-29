- A string is a sequence of 0 or more characters delimited by single quotes or double quotes.
	- `'Rensselaer'`
	- `"Albany, NY"`
	- `'4 8 15 16 23 42'`
	- `''`
- Strings can be printed
	- `print("Hello, world!")`
	  `Hello, world!`
- Strings may be assigned to variables:
	- `s = 'Hello'`
	  `t = "Good-bye"`
	  `print(s)`
	  `Hello`
	  `>>> t`
	  `'Good-bye'`
 - #### Combining Single and Double Quotes in a String:
	 - A string that starts with double quotes must end with double quotes, and can have single quotes inside.
	 - A string that starts with single quotes must end with single quotes and can have double quotes inside.
	 - `s = 'He said, "Hello, World!"'`
	 - `t = "Many single quotes here ''''' and here ''' but correct."`
	 - Depending on if you want to include a single quote or double quote in a string you must choose which one to start with,
 - #### Multi-Line Strings:
	 - Strings do not extend across multiple lines unless the string starts with and ends with `"""` or `'''`.
		 - Any other character is allowed inside these strings.
	 - `s1 = """This`
	   `is a mult-line`
	   `string. """`
	   
	   `>>> s1`
	   `'This\nis a multi-line\nstring.'`
	   
	   `print(s1)`
	   `This`
	   `is a multi-line`
	   `string.`
- #### Escape Characters
	- Inserting a `\` in the middle of a string tells Python that the next character has special meaning.
	- `\n` — end the current line of text and start a new one
	- `\t` — skip to the next “tab stop” in the text. This allows output in columns  
	- `\'` — do not interpret the `'` as a string delimiter
	-  `\"` — do not interpret the `"` as a string delimiter
	-  `\\` — put a true back-slash character into the string
	- `s0 = "*\t*\n**\t**\n***\t***\n"`
	  `s1 = "I said, \"This is a valid string.\""`
- #### Concatenation
	- Two or more strings may be concatenated to form a new string, with or without the `+` operator.
	- `s0 = "Hello"
	`s1 = "World"
	`s0 + s1
	`s0 + ' ' + s1
	``'Good' 'Morning' 'America!'
	``'Good ' 'Morning ' 'America!'
- #### Replication
	- You can replicate strings by multiplying them by an integer:
	  `s = 'Ha'`
	  `print(s * 10)`
	  `HaHaHaHaHaHaHaHaHaHa`
- #### Practice Problems - Part 1
- 1.
>>> s1 = '"Hi mom", I said.  "How are you?"'
>>> s2 = '"Hi mom", I said.  '"How are you?"
>>> s3 = '"Hi mom", I said.  '"How are you?"'
>>> s4 = """'Hi mom", I said.  '"How are you?"'"""
>>> s5 = ""I want to be a lion tamer!"'
>>> s6 = "\\"Is this a cheese shop?\\"\\n\\t'Yes'\\n\\t\\"We have all kinds!\\""

s1 =  valid, `"Hi mom", I said. "How are you?`
s2 = not valid, starts with single and is missing the single at the end.
s3 = not valid, extra single is added before the How and end the string before that as well as breaking the rest.
s4 = valid, `"'Hi mom", I said.  '"How are you?"'`
s5 = not valid, single quotation at end must be a double.
s6 = valid, `"Is this a cheese shop?"
					`'Yes'
					`"We have all kinds!"`
- 2.
  >>> s = "Cats\\tare\\n\\tgood\\tsources\\n\\t\\tof\\tinternet\\tmemes"
  >>> s
  >>> print(s)
Output: 
'Cats\\tare\\n\\tgood\\tsources\\n\\t\\tof\\tinternet\\tmemes'
Cats   are
   good   sources
         of   internet   memes
- 3. 
	print('\\\\' \*4)
  	\\\\\\\\\\\\\\\\
	print('\\\\\\n'*3)
	\\\\\\
	\\\\\\
	\\\\\\
	print('Good-bye')
	Good-bye
- 4.
	  **'abc' 'def'**
	'abcedef'
	
	**'abc' + 'def'**
	'abcedef'

	**'abc ' + 'def'**
	abc def

	**x = 'abc'
	y = 'def'
	x+y**
	'abcdef'
	
	**x y**
	*Error*
	
	**s1 = 'abc'\*4
	s1**
	'abcabcabcabc'
	
	**s2 = 'abc '\*4
	print(s2)**
	abcabcabcabc

- #### Functions
	- `len` calculates the number of characters in the provided string using its own code.
  >>> s = "Hello!"
  >>> print(len(s))
  >>> 6
	
	- `str` convert an integer or float to a string.
	- `int` converts a string that is the form of an integer to an integer.
	- `float` converts a string that is the form of an float to an float.
- #### More about print
  >>> help(print)
Help on built-in function print in module builtins:
print(...)
    print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
Prints the values to a stream, or to sys.stdout by default.
    Optional keyword arguments:
    file:  a file-like object (stream); defaults to the current sys.stdout.
    sep:   string inserted between values, default a space.
    end:   string appended after the last value, default a newline.
    flush: whether to forcibly flush the stream.

- `flush` is useful when trying to debug, if you are trying to trace your program execution adding `flush=True` as your final argument will give more accurate results.
- #### User Input
	- `input` can be used to ask the user for input.
		- `print("Enter a number")
		  `x = float(input())
		  `print('The square of', x, 'is', x*x)
	- string can also be inserted directly into the `input` call.
		- `x = input("Enter a number")`
		  `x = float(input())`
		  `print('The square of', x, 'is', x*x)`
- #### Summary
	- 