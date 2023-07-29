- It assumes each node has a pointer to its parent.
```c++
percolate_up(TreeNode<T> * p) { 
	while (p->parent) 
		if (p->value < p->parent->value) { 
			swap(p, parent); // value and other non-pointer member vars 
			p = p->parent; 
		} else 
			break;
}
```
> [!info] O(log *n*) in the worst-case. O(*1*) in the average case.
