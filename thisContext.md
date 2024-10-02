1- No 'use strict':
Simple console.log(this);
--> {} i.e. gives Empty Object in Node.JS

Normal Function:
function normalFunc(){
console.log(this);
}
normalFunc() --> Global Object --> this function refers to global object

2- 'use strict':
Simple console.log(this);
--> {} i.e. gives Empty Object in Node.JS (same as no 'use strict')

Normal Function:
function normalFunc(){
console.log(this);
}
normalFunc() --> undefined
