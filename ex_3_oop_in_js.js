/*
An Object is an instance of a class. Objects are everywhere in JavaScript almost every element is an Object whether it is a function,arrays and string.
Note: A Method in javascript is a property of an object whose value is a function.
Object can be created in two ways in JavaScript:

Topics
A. Different ways of creating objects
B. Classes
C. Encapsulation
D. Inheritance

*/
// A. Different ways of creating objects
// 1. Using an Object Literal

    // defining object
    let person = {
        first_name: 'jack',
        last_name: 'woo',
        // method
        getFunction: function(){
            return(
                `the name of the person is\
                ${person.first_name} ${person.last_name}`
            );
        },
        // object within object
        phone_number : {
            mobile:'12356',
            landline: '34567'
        }
    }
    console.log(person.getFunction());
    console.log(person.phone_number.landline)


//2. using object constuctor
    function person2(first_name,last_name){
        this.first_name = first_name;
        this.last_name = last_name;
    }
    let p1 = new person2('bhoj','karki')
    console.log(`${p1.first_name} ${p1.last_name}`)

// 3. using Object.create() method
/*
The Object.create() method creates a new object, using an existing 
object as the prototype of the newly created object.
*/

    const coder = {
        isStudying: false,
        printIntroduction : function(){
            console.log(`My name is ${this.name}. Am I studying? : ${this.isStudying}.
            `);
        }
    }
    // crate object using Object.create()
    const p2 = Object.create(coder);

    // add name property to p2 (not coder) just for p2 instance
    p2.name = "Bhoj Bahadur Karki";

    // inherited property can be overwritten
    p2.isStudying =true;

    p2.printIntroduction()

// B. Classes
/*
Classes– Classes are blueprint of an Object. A class can have many 
Object, because class is a template while Object are instances of 
the class or the concrete implementation.
Before we move further into implementation, we should know unlike 
other Object Oriented Language there is no classes in JavaScript 
we have only Object. To be more precise, JavaScript is a prototype 
based object oriented language, which means it doesn’t have classes 
rather it define behaviors using constructor function and then reuse 
it using the prototype.
*/

/*
Example:
Lets use ES6 classes then we will look into traditional way of 
defining Object and simulate them as classes
*/
// Defining class using es6
class Vehicle{
    constructor(name,maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return(`The name of the bike is ${this.name}. `);
    }
}

let b1 = new Vehicle('Hyabusa','Suzuki','1400cc');
console.log(b1.name);
console.log(b1.maker);
console.log(b1.getDetails());

// The same code traditionally(before es6) can be written as

function Vehicle2(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
Vehicle2.prototype.getDetails = function(){ 
    return('fefe The name of the bike is '+ this.name); 
}
// bike
let b2 = new Vehicle2('Ninja','Kawasaki','998cc');
console.log(b2.name);
console.log(b2.maker);
console.log(b2.getDetails());

/*
C. Encapsulation – The process of wrapping property and function within 
a single unit is known as encapsulation.
Let’s understand encapsulation with an example.
*/
//encapsulation example 
    class person3{ 
        constructor(name,id){ 
            this.name = name; 
            this.id = id; 
        } 
        add_Address(add){ 
            this.add = add; 
        } 
        getDetails(){ 
            console.log(`Name is ${this.name},Address is: ${this.add}`); 
        } 
    } 
    
    let person1 = new person3('Bhoj',21); 
    person1.add_Address('Kathmandu'); 
    person1.getDetails(); 
/*
In the above example we simply create an person Object using the 
constructor and Initialize it property and use it functions we are 
not bother about the implementation details. We are working with an 
Objects interface without considering the implementation details.
Sometimes encapsulation refers to hiding of data or data Abstraction 
which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object.
Example:
*/
// using let(making it local variable) instead of this. hides data 
// from consumer of this function
function person4 (fname,lname){
    let firstname = fname;
    let lastname = lname;

    // using let to hide this method, this is a local variable
    let getDetails_noaccess = function(){
        return(`${firstname} ${lastname}`) 
    }

    // using this. to make it accessible to consumer
    this.getDetails_access = function(){
        return(`F: ${firstname} L: ${lastname}`)
    }
}

// lets test this
let p4 = new person4('Bhoj','Karki')
console.log(p4.firstname);// not accessible 
console.log(p4.getDetails_noaccess);// not accessible 
console.log(p4.getDetails_access());// accessible 

/*
D. Inheritance – It is a concept in which some property and methods of 
an Object is being used by another Object. Unlike most of the OOP 
languages where classes inherit classes, JavaScript Object 
inherits Object i.e. certain features (property and methods)of one 
object can be reused by other Objects.
Lets’s understand inheritance with example:
*/
// base class
class Human{
    constructor(name){
        this.name = name;
    }
    // lets define a method
    toString(){
        return(`Name: ${this.name} `)
    }
}
// child class extending base class
class Student extends Human{
    constructor(name,id){
        super(name);
        this.id = id;
    }

    // override the function
    toString(){
        return (
            `${super.toString()}, Student ID: ${this.id}`
        );
    }

}
// we can remove let in : let s1 = new ...
s1 = new Student('Rhoul','2233')
console.log(s1.toString())
/*
Note: The Human and Student object both have same method i.e 
toString(), this is called as Method Overriding. Method Overriding 
allows method in a child class to have the same name and method 
signature as that of a parent class.
In the above code, super keyword is used to refer immediate 
parent class instance variable.
*/