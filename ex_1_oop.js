/*
author:bhoj bahadur karki
date: Feb 1st 2020
purpose: OOP concept in javascript

1. abstraction   -> hiding implementation details for user
2. encapsulation -> grouping things together
3. inheritance   -> reducting redudent code
4. Polymorphis   -> many forms(remove ugly switch case in procedural code)


List of topics: 
creating objects
factories and constructors
primitives and reference types
working with properties
private properties 
getter/setters

In javascript functions are objects
*/

// console.log("Hello world")
//--1. object literal syntax

// const circle = {
//     radius: 1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw: function(){
//         console.log('draw')
//     }
// } 
// circle.draw()

//--2. Factory function
function createCircle(radius){
    return {
        radius, // in es6,this is similar to radius = radius; 
        draw: function(){
            console.log('draw');
        }
    }
}
const circle = createCircle(1);
// circle.draw();

//--3. Constructor function 
//--Note : constructor is created using capital first letter e.g. 'Circle'
function Circle(radius){
    // console.log('this', this)
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
Circle.call({},1) // calling a function
Circle.apply({},[1,2,3])

const another = new Circle(1);
//A. adding property is simple in javascript(3 ways)
another.location = {x:22};
// this below is another way this will override location property
another['location'] = {x2:77,}
// we can also use bracket notation like this
// this is useful when we have special character like dash(-) or space in 
// property name like 'center[space] location'
const propertyName = 'center location';
another[propertyName]={x:1}

//B. we can delete the property like this
/*
when user ask for user object but you might not want to send all the user 
properties like password , in such case we dynamically delete the user property
*/
delete another['location'];
/*
note: using new Circle(1), the new keyword does three things it creates an object 
assigns this to the circle and returns this object , in the function we do not have
to do 'return this;'

also, if the developer forget to do:
const another = new Circle(1);
and does,
const another = Circle(1);
then, 'this' will refer to gloabl object in our case window object.
*/
//C1. Iterating over the another object
for (let key in another){
    // console.log(key, another[key]);
    // if we want to only display primitives and not functions
    // user typeof keyword
    if (typeof another[key] !== 'function'){
        console.log(key,another[key])
    }
}
//C2 we can also user Object.key to log all the keys
const keys  = Object.keys(another);
console.log(keys)

//D want to know if an object have given property
if ('radius' in another){
    console.log('circle has radius')
}


// const Circle1  = new Function('radius',`
// this.radius = radius;
// this.draw = function(){
//     console.log('draw')
// }
// `)
// const circle_one = new Circle1(2) 


/*
Types in javascript - 2 types
value types            Reference types
-------------          -------------
Number                  Object
String                  Function
Boolean                 Array
Symbol
undefined
null

generally value types are primitives and reference types are objects
*/

// variables are independent
let x = 10; // these are called primitives
let y  = x;
x = 20 // y value will remain 10 and not change

// but when we use object(ie. here {} means object) to copy
// reference is passed than value,
let x1 = {value :10}
let y1 = x1

x1 = 20 // now the y1 will also be 20

/* Conclusion: 
Premitives are copied by their value
Objects are copied by their reference
*/

// Lets get an example of passing by values(i.e. for premitive types)
// and passing by reference

let num = 10;
function increase(num){
    num++;
    console.log("local num",num)
}
increase(num)
console.log(num) // this will print 10 not 11
/*
The reason behind printing 10 is we are dealing with two variables here 
one is 'num in let num = 10;' and another is 'num in function increase(num)'
we have incresed local num but not global num
*/

// to remove this we can do a pass by reference in order to see change

let obj = {value: 10};
function increase_by_reference(obj){
    obj.value++
}
increase_by_reference(obj)
console.log("value :",obj)


