## The Data Structure:
- Assume every matrix contains doubles.
- We refer to a matrix with `m` rows and `n` columns as an `m X n` matrix.

## Basic Functionality
- [x] Write a constructor that takes two `unsigned ints` (row and column) count and a `double` *fill* value. ✅ 2023-02-07
	- [x] The constructor should create a data representation of a `rowsXcolumns` matrix with every value initialized to `fill`. ✅ 2023-02-07
- [x] Class must support `==` and `!=`. ✅ 2023-02-07
	- Two matrices are considered to be equal if they have the same value in every position.
- [x] Implement a `num_rows()` and `num_cols()` which return the number of rows and the number of columns in a matrix respectively. ✅ 2023-02-07
- [x] Write a `clear()` method to reset the number of rows and columns to 0 and deallocate any memory currently held by the matrix. ✅ 2023-02-07
- [x] Implement `get()`, which takes in a row, a column, and a double. ✅ 2023-02-07
	- If the row and column are within the bounds of the matrix, then the value at that the chosen position should be stored in the double and the function should return true. Otherwise return false.
- [x] Write a `set()` method which takes in a row, column, and a double. ✅ 2023-02-07
	- Set returns false is the position is out of bounds, and true if the position is valid.
	- It should also set the chosen index to the value of the double that was passed in.

## Overloaded Output Operator
- [x] Write a non-member overload of the operator `operator<<` ✅ 2023-02-07
	- Outside of the `Matrix` class definition but still in the .cpp and .h files write: `std::ostream& operator<< (std::ostream& out, const Matrix& m)`

## Simple Matrix Operations
- [x] `multiply_by_coefficient()` which takes a `double` called a coefficient. ✅ 2023-02-08
	- Multiply every element in the matrix by the coefficient.
- [x] `swap_row()` which takes two arguments of type `unsigned int`, a source row and a target row number. ✅ 2023-02-08
	- If both rows are inside the matrix bounds then the function should switch the values in the two rows and return true. Otherwise return false.
- [x] `transpose()` which has a return type of `void`. ✅ 2023-02-09
	- Turn a `mXn` matrix A into `nXm` A$^T$.

## Binary Matrix Operations
- [x] `add()` and `subtract()` both functions take in one argument, a second `Matrix` (B) and modify the original (A) if the dimensions of A and B match. ✅ 2023-02-07
	- If they match return true else, return false.

## Harder Matrix Operations
- [x] `get_row()` and `get_col()` which both take one `unsigned int` and return a `double*` ✅ 2023-02-08
	- `get_row()` the argument is the number of row to retrieve
	- `get_col` is the number of column to retrieve`
	- If the requested row/column is outside the bounds, the method should return a pointer set to `NULL`.
- [x] `quarter()` takes no arguments and returns a `Matrix*` containing four new `Matrix` elements in order. ✅ 2023-02-08
	- An upper left quadrant
	- An upper right quadrant
	- A lower left quadrant
	- A lower right quadrant

## Your Task & Provided Code
- [x] Include extra tests within `StudentTest()` in `matrix_main.cpp` ✅ 2023-02-09

## Extra Credit
- [ ] `resize()`takes in three arguments: a number of rows, number of columns, and finally a fill value.
	- The function should always change the internal matrix to be `rowsXcolumns` in size, copying over any values that were in the original bounds of the original matrix.
	- If the new matrix is larger, any positions that are in the new matrix but not the old one should have the fill value.
- [x] Write tests in `ExtraCreditTest()` ✅ 2023-02-28