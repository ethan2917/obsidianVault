```c++
public: 
// TYPEDEFS 
typedef T* iterator; 
typedef const T* const_iterator; 
// MODIFIERS 
iterator erase(iterator p); 
// ITERATOR OPERATIONS 
iterator begin() { return m_data; } 
const_iterator begin() const { return m_data; } 
iterator end() { return m_data + m_size; } 
const_iterator end() const { return m_data + m_size; }
```