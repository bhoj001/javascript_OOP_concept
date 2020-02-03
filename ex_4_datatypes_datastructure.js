/*
author: Bhoj Bahadur Karki
purpose: Learning data types and data structure in javascript

Link: https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b
type coersion in JS: https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/


Table of Contents
— — Prerequisites
— Types & Data Structures Basics
— — Does JS have types?
— — Statically Typed
— — Dynamically Typed
— — Weakly Typed
— — Primitives
— — Objects
— — So when does it get confusing?
— Important Guidelines
— Some Confusing Parts
— — Why is Null an Object?
— — Why is not a number a number?
— — Double Equals vs Triple Equals
— — A primitive is not an object and has no methods of its own
— Tips and Tricks
— References and Links
*/

/*
JS is both dynamically typed and weakly typed.

Statically Typed[Not statically typed]
JS is not statically typed unless you’re using a language, tool such as Typescript or 
Flow that compiles to JS code. 
But we’ll briefly cover it for comparison reasons.

Dynamically Typed
Dynamically typed languages infer variable types at runtime. This means once your code 
is run the compiler/interpreter will see your variable and its value then decide 
what type it is. The type is still enforced here, it just decides what the type is.
var a = 1 // int
b = 'test' // string
// etc
Weakly Typed
Weakly typed languages allow types to be inferred as another type. 
For example, 1 + '2' // '12' In JS it sees you’re trying to add a 
number with a string — an invalid operation — so it coerces your 
number into a string and results in the string ‘12’.
*/
// Primitives in JS
/*
Primitives
These six types are considered to be primitives. A primitive is not an object and has no 
methods of its own. All primitives are immutable.

Boolean — true or false
Null — no value
Undefined — a declared variable but hasn’t been given a value
Number — integers, floats, etc
String — an array of characters i.e words
Symbol — a unique value that's not equal to any other value

Everything else is an Object type.
*/

/*
Objects
Here are some of the standard objects. Notice some of these were on the primitive list too, 
but don’t confuse them. These act as constructors to create those types. i.e Boolean('a') // true

There are two that are the main ones you’ll use for your own structures:
Object
Array

There are many other objects too just to list a few:
Function
Boolean
Symbol
Error
Number
String
RegExp
Math
Set
*/

const arr = [1,2,3]
const a = new Array(2)

console.log("typeof arr=",typeof arr)
console.log("typeof a=",typeof a)

// literal objects
const dog ={
    name: 'tommy',
    age: 8
}
console.log('typeof dog=',typeof dog)

console.log('typeof Math=',typeof Math)
console.log('typeof Math.PI=',typeof Math.PI)

const sum = new Function('a','b','return a+b')
console.log('sum(3,2)=',sum(3,2))

// Type coersion in JS
// Link:https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/ 

y = '13'+12
console.log(`'13'+12 =`,y)

y = '30'-5
console.log(`'30'-5 =`,y)

y = ['a','b']+['c','d']
console.log(`['a','b']+['c','d'] =`,y)

y = [5]-[2]
console.log(`[5]-[2] =`,y)

const a1 = 'str'
const b1 = 123
const c1 = []

console.log("a1=",a1)
console.log("b1=",b1)
console.log("c1=",c1)


t = a1 && b1
console.log(`a1 && b1 =`,t)

t = b1 && c1
console.log(`b1 && c1 =`,t)

t = a1 || b1
console.log(`a1 || b1 =`,t)

/*
Next, I’ll go over some of the other confusing parts and some tips and tricks.
Important Guidelines
All primitive values are immutable
Be aware of type coercion
There is no static typing i.e int num = 5
The JavaScript engine decides what type it is

Why is Null an Object?
The documentation lists it as a primitive type, yet its typeof returns ‘object’.
Basically, this is a bug that isn’t fixed because it would break existing code. This bug 
has been around since the first version of JavaScript. The bug comes from the typeof 
function in the JS source — I’ll use some pseudo code to simplify it.
*/
/* pseudo code of typeof

if(is_undefined){
    return 'undefined'
}else if(is_an_object){
    
    if (object_is_a_function){
        return 'function'
    }else{
        return 'object'
    }
}

Note: here they did not check for null so null return  object type
*/
/*
double equal(==)vs triple equal(===)
Triple equal is use to check both type and value of a variable while double equal is used to
check only value

here:
if we do:
1 == "1.0" //return true one is number another is string but value is same

if we do:
1 === "1.0" // returns false as triple equal check both value and types

when in doubt use triple equal(===) always

Also, 

false == 0
// true

We get true? Why is this? It has to do with falsy values in JavaScript. We’ll explore this concept 
in the next section.
Falsy Values
Okay, so why does false == 0 in JavaScript? It’s complex, but it’s because in 
JavaScript 0 is a falsy value.
Type coercion will actually convert our zero into a false boolean, then 
false is equal to false.
There are only six falsy values in JavaScript you should be aware of:
false — boolean false
0 — number zero
“” — empty string
null
undefined
NaN — Not A Number
Falsy Value Comparison
The following you can consider to be ‘rules’ of falsy values. These are things you should ultimately memorize if you will be working with JavaScript often.
false, 0, and ""
When comparing any of our first three falsy values with loose equality, they will always be equal! That’s because these values will all coerce into a false boolean.
false == 0
// true
0 == ""
// true
"" == false
// true
2. null and undefined
When comparing null and undefined, they are only equal to themselves and each other:
null == null
// true
undefined == undefined
// true
null == undefined
// true
If you try to compare null to any other value, it will return false.
3. NaN
Lastly, NaN is not equivalent to anything. Even cooler, it’s not even itself!
NaN == null
// false
NaN == undefined
// false
NaN == NaN
// false
*/

const str = "a"
y  = str instanceof String // false
console.log('str instanceof String=',y)

ar = [1,3]
y  = ar instanceof Array // true
console.log('ar instanceof Array =',y)

/*
Strings are in fact primitives as described in the article, 
not entire objects. JS knows when you try to access a method 
on the String object and coerces your primitive into a string 
object. When it’s done the temporary object is garbage collected 
and life continues as usual.
*/

// Tricks

//just a function
const func = (x,y,z)=>{
    // use || to assign a default value
    y = y || 10
    
    // use && to do shoter if statements
    z && console.log(x,y,z)

    console.log(x,y)
}

func(5) //5,10

func(1,2,3)
// 1 2 3
// 1 2

// quick type conversion 

// use + to convert to Number
const toNum = +'123' // 123
console.log(typeof(toNum),toNum)

// use '' + X to convert to String
const toStr = '' + 123
console.log(typeof(toStr),toStr)


