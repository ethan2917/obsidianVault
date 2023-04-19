- Must dynamically allocate any memory needed for the object being constructed, copy the contents of the memory of the passed object to this new memory, and set the values of the various member variables appropriately
- From the Matrix hw:
  ```c++
  void Matrix::copy(Matrix const &m1){  
	  // Deallocate all the currently used memory  
	  for (unsigned int r = 0; r < rowCount; r++) {  
	    delete []m_data[r];  
	  }  
	  delete []m_data;
	    
	  // Set m_data to NULL  
	  m_data = NULL;  
	  // Change the row and column counts  
	  rowCount = m1.rowCount;  
	  colCount = m1.colCount;  
	  // Allocate enough memory for the rows  
	  m_data = new double*[rowCount];  
	  // Iterate through the rows and create a double array for each row  
	  for (unsigned int r = 0; r < rowCount; r++) {  
	    m_data[r] = new double[colCount];  
	  }  
	  // Iterate through the matrix and copy each value  
	  for (unsigned int r = 0; r < rowCount; r++) {  
	    for (unsigned int c = 0; c < colCount; c++) {  
	      m_data[r][c] = m1.m_data[r][c];  
		}  
	  }  
	  // Set m_freed to false  
	  m_freed = false;  
}
```