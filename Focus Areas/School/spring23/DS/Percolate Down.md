- This function is written in terms of tree nodes with child pointers, but later it will use vector subscripts.
```c++
percolate_down(TreeNode<T> *p){
	while (p->left){
		TreeNode<T>* child; // Choose the child to compare against 
		if (p->right && p->right->value < p->left->value) 
			child = p->right; 
		else 
			child = p->left;
		if (child->value < p->value) {
			swap(child, p); // value and other non-pointer member vars
			p = child;
		}
		else 
			break;
	}
}
```
> [!info] O(log *n*) in the worst-case.
