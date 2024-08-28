1.Write short notes on the below with code examples 
while loop 
do-while loop
 for loop
  for in loop 
  for of loop
ans>
```js

while loop 
//A while loop is used to repeat a specific block of code an unknown number of times , until a condition is met.
  
  let count =1
  while(count<5){
    console.log(count);
    count++
  }
  do while loop
  //a do while loop is a control flow statement that executes a block of code and then either repeats the block or exits the loop depending on a given boolean condition.

let count =30
do{
  console.log(count);
  count++
}while(count<5)


  for loop
   //A "for" loop is used to repeat a specific block of a known number of times.
  for (let i=1;i<5;i++){
    console.log(i);
    
  }

 for of loop  -for array
//the jvascript for of loop through the value of an iteratable object.
let arr=[1,2,3,4,5]
for(i of arr){
    console.log(i);
    
}
    
for in loop -for object
//the for in loop iterates over a person object.Each iteration returns a key (x) the key is used to access the value of the key.
let obj ={
    yt:"youtube",
    ig:"instagram",
    in:"linkedIn",
    fb:"facebook"

}
for(i in obj){
    console.log(i);
    console.log(obj[i]);
       
}


```
2.Explain the scope in Javascript.
ans>
```js
Scope determines the accessibility (visibility) of variables. JavaScript variables have 3 types of scope: Block scope; Function scope; Global scope. Block Scope.

```
3.What is a callback?
ans> a function passed as a argument to  another funcion is called callback function

```js

let message =() =>{
    console.log("this message is shown after 3 seconds");
    
}
setTimeout(message,3000)


```
4.Explain context in JavaScript 
ans>
there are two types of context global context and excicution context 

global context
as soon as we start writing code global context get active and start scaning our code
after scaning it keeps the varieble undifined and keeps the function available 


excicution context
when we invocked a function excicution context gets activated ,excicution context is responsible for function excicution 

let firstFunction=()=>{
    console.log("first");
    
}
let secondFunction =()=>{
    firstFunction()
    console.log("second");
    
}
secondFunction()

5.What is hoisting in JavaScript?
ans>its a mechanism where the declaration of a variable or function are taken to the top of the scope before the excicution of code 

6.Explain lexical scope 
ans>
```js
lexical scope

//1.global scope  -variables declared using var keyword has global scope

{
var place ="kochi"
console.log(place);

}
console.log(place);



//2.block scope  -variables declared using let or const keywords has blck scope ,that means variables declared using let or const keyword inside the block (kerly brases) are axest only inside the block not from out side the block

{
    let place ="kochi"
    console.log(place);
    
    }


    
{
    const place ="kochi"
    console.log(place);
    
}
console.log(place);not axexable

  
//3.function scope  - variables declared using let,var, and const keyword has funcion scope ,means it does not axexable out side function 

let printName = ()=>{
    let myName ="aboo"
console.log(myName);

}
printName()

console.log(myName);

```
7.What is scope chaining?
ans>variables declared in the outerfunction can be used in the innerfunction but not vise -verser
```js

let outerFunction= ()=>{
    let firstName="aboo"
    let innerFunction =()=>{
        let lastName="hamid"
        console.log(firstName,lastName);
        
    }
    innerFunction()
}
outerFunction()

```
8.Explain closure. 
ans> closure is the combination of a function and its lexical environment with in which the function is declared 

9.What is the difference between undefined and not defined in javascript
ans>
```js
 undefined-variable is declared value is not assigned
 not defined -not defined-it means variable is not at all declared

```
10.Explain spread and rest operator
ans>
```js
let arr=[1,2,3]
let newArr=[...arr,3,4]
console.log(newArr);
//r
function add(...input){
    let result=0
    for(i of input){
        result +=i
    }
    return result
}
console.log(add(1,2,3,4));


```
11. Explain ‘this’ keyword in Javascript.
ans>
```js

the "this" keyword refers to the object that is currently executing or calling the function,it is a way to access and manipulate the properties and method of the object called the function

```