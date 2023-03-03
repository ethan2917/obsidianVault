- Assignment operators of the form: `v1 = v2;` are translated by the compiler as:  `v1.operator=(v2);`
- The implementation of an assignment operator usually takes on the same form for every class:
	- Do no real work if there is a self-assignment.
	- Otherwise, destroy the contents of the current object then copy the passed object, just as done by the copy constructor. In fact, it often makes sense to write a private helper function used by both the copy constructor and the assignment operator.
	- Return a reference to the (copied) current object, using the this pointer.
```c++
// Assign one vector to another, avoiding duplicate copying. 
template <class T> Vec<T>& Vec<T>::operator=(const Vec<T>& v) { 
	if (this != &v) { 
		delete [] m_data; 
		this-> copy(v); 
	} 
	return *this; 
}
```