The names hashset and hashmap were spoiled by developers anticipating the STL standard.
STL's agreed-upon standard for hash tables: `unordered_set` and `unordered_map`
For many types STL has a good default hash function, so you many not need to specify both template parameters.