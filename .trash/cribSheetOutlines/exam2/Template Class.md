[[8.0 Templated Classes & Vector Implementation]]
```c++
template <class T>
class MyClass {
  // Class implementation goes here
};
```
- Pass data type as a parameter so that we don’t need to write the same code for different data types.
- Templated functions defined outside the template class declaration: `template <class T> void Vec<T>::create(...`
- Templated classes and templated member functions are not created/compiled/instantiated until they are needed.