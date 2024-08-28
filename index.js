/*
let user =null
if(user){
    console.log("condition true");
    
}else{
    console.log("condition false");
    
}
    */
//coercions
//coercion reffers to the automatic conversion of values from one data type to another
/*

console.log(2+"2");
*/





//adding elaments

/*
const head = document.querySelector(".heading")
head.innerHTML = "Hay i am Aboo"
head.style.color = "green"
*/

/*
let h1 = document.createElement("h1")
h1.textContent = "lets go"
document.body.appendChild(h1)

let button =document.createElement("button")
button.textContent="click hear"
button.setAttribute.atributr("class","bg-blue-500")
document.body.appendChild(button)
*/

//removing elament
// const ul=document.querySelector("ul")
// const lists =document.querySelectorAll("li")
// for (i of lists){
//     ul.removeChild(i)
// }


/*
const ul = document.querySelector("ul")
const lists = document.querySelectorAll("li")
lists[1].style.color = "green"
for(i of lists){
    ul.removeChild(i)
}
    */


//lexicalenviroment
//lexical environment is the place where the veribles are axexable
/*
{
    let name = "aboo"
    console.log(name);
    
}
    */
//log(name) not axexable

//lexical scope

//1.global scope  -variables declared using var keyword has global scope
/*
{
var place ="kochi"
console.log(place);

}
console.log(place);
*/


//2.block scope  -variables declared using let or const keywords has blck scope ,that means variables declared using let or const keyword inside the block (kerly brases) are axest only inside the block not from out side the block
/*
{
    let place ="kochi"
    console.log(place);
    
    }


    
{
    const place ="kochi"
    console.log(place);
    
}
console.log(place);not axexable

  */  
//3.function scope  - variables declared using let,var, and const keyword has funcion scope ,means it does not axexable out side function 
/*
let printName = ()=>{
    let myName ="aboo"
console.log(myName);

}
printName()

console.log(myName);
*/


/*

let printName = ()=>{
    var myName ="aboo"
console.log(myName);

}
printName()

console.log(myName);
*/


//scope chaning   -variables declared in the outerfunction can be used in the innerfunction but not vise -verser
/*
let outerFunction= ()=>{
    let firstName="aboo"
    let innerFunction =()=>{
        let lastName="hamid"
        console.log(firstName,lastName);
        
    }
    innerFunction()
}
outerFunction()
*/


//closure    - closure is the combination of a function and its lexical environment with in which the function is declared 

//hoisting  -  its a mechanism where the declaration of a variable or function are taken to the top of the scope before the excicution of code 

/*
  userName="aboo"
  console.log(userName);
  var userName
  


  console.log(userName);
    userName="aboo"
  var userName
  

  console.log(userName);

var userName
  userName="aboo"
    

  
  console.log(userName);
   const userName


  userName="aboo"
    */



  //loop

  //while loop
  /*
  let count =1
  while(count<5){
    console.log(count);
    count++
  }

*/
//do while
let count =30
do{
  console.log(count);
  count++
}while(count<5)


  //for loop
  /*
  for (let i=1;i<5;i++){
    console.log(i);
    
  }
    */
  //q .print 0 to 10 using for loop?
/*
  for (let i=0;i<11;i++){
    console.log(i);
    
  }
    */

/*
  let arr=["aboo","affan","nazrin","subin"]
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    
  }
    */


  /*
  let arr=["aboo","affan","nazrin","subin",3003,223,55,3]
  for(let i=0;i<arr.length;i++)
  if(typeof(arr[i])!=="string"){
    console.log(arr[i]);
  }

*/
  

/*
  let arr=["html","css","javascript","index.js",]
  for(let i=0;i<arr.length;i++)
  if(arr[i].length<5){
    console.log(arr[i]);
  }
*/



// for of   -for array
/*
let arr=[1,2,3,4,5]
for(i of arr){
    console.log(i);
    
}
    */
//for in  -for object
/*
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
    */


//spread and rest
//s
/*
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
*/

//contest
//there are two types of context global context and excicution context 

//global context
//as soon as we start writing code global context get active and start scaning our code
//after scaning it keeps the varieble undifined and keeps the function available 
/*
console.log(user);
let user ="shon"
*/

/*
add()
function add (){
    console.log(7+2);
    
}
    */


/*
let add = ()=>{
    console.log(7+2);
    
}
*/

//excicution context
//when we invocked a function excicution context gets activated ,excicution context is responsible for function excicution 
/*
let firstFunction=()=>{
    console.log("first");
    
}
let secondFunction =()=>{
    firstFunction()
    console.log("second");
    
}
secondFunction()
*/
// q9 ans> undefined-variable is declared value is not assigned
           //not defined-it means variable is not at all declared