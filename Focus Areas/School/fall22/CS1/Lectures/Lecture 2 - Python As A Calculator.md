- Python is an interpreter language, it does not need a compiler.
- Use the interpreter as a tool to test and learn new things.
- Precedence:
    1.  `( )` - parentheses
    2. `*` - the exponentiation operator, ordered _right-to-left_
    3. `` - the negation (unary minus) operators, as in `5**2`
    4. `, /, //, %` - ordered _left-to-right_
    5. `+, -` - ordered _left-to-right_
- Remember Python starts counting at 0.
- `print` is a Python “function” that combines _strings_ (between the quotations) and values of variables, separated by commas, to generate nice output.
- Variables:
    - Legal variable names in Python must start with a letter or a `_`, and be followed by any number of letters, underscores or digits.
    - If the same variable name is used more than once the original value of the variable will be overwritten more than once.
    - This is called **snake_case**.
- Syntax and Semantic Errors:
    - Syntax errors are errors in the form of the code, such as a missing “;”.
        - The program will not compile.
    - A semantic error is based on the logic of the code and will lead to a crash in the code.
        - A variable does not exist until it contains a value of some sort.
- Keywords:
    - Keywords allow us to write more complicated operations — involving logic and repetition — than just calculating.
    - ['False', 'None', 'True', '**peg_parser**', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
- Mixed operators are shortcuts for multiple expressions such as:
    - `-= += *= /=`