- The destructor is called implicitly when an automatically-allocated object goes out of scope or a dynamically allocated object is deleted.
- The destructor is responsible for deleting the dynamic memory “owned” by the class.
- From Matrix hw:
```c++
Matrix::~Matrix() {  
  clear();  
}

// Clears the matrix and deallocates memory  
void Matrix::clear() {  
  // If it has already been deallocated just exit  
  if (m_freed){  
    return;  
  } else if (!m_freed) { // If it has not yet been deallocated then proceeds  
    for (unsigned int i = 0; i < rowCount; i++) {  
      delete [] m_data[i];  
    }  
    delete []m_data;  
    // Set everything to different values  
    m_data = NULL;  
    rowCount = 0;  
    colCount = 0;  
    m_freed = true;  
  }  
}
```