If `i` is the hash location then the following sequence of table locations is tested: `(i+1)%N, (i+2*2)%N, (i+3*3)%N, (i+4*4)%N, ...`
More generally, the `j`th probe of the table is `(i+c1j+c2j^2)%N`.