/*
author:bhoj bahadur karki
date: Feb 1st 2020
purpose: abstraction example in javascript
Hide the details show the essentials

Here we just want the user of the function to use only
few parts of the function Circle

here we want to only show radius and draw function and hide other
because other are implementation detail and user don't really care about those
*/

function Circle(radius){
    // this. defines as property
    this.radius = radius;
    // defualtLocation is private local variable 
    let defautlLocation = {x:0,y:0};


    //    let computeOptimumLocation = function(factor){
    //         //...
    //     }

    this.draw = function(){
        // computeOptimumLocation(0.1);
        console.log("draw");
    }
    
    // one way of displaying defaultLocation to user
    // getters
    this.getDefaultLocation = function(){
        return defautlLocation;
    }

    // another way to define property(i.e showing private variable
    //  to user/ local variable to user)
    Object.defineProperty(this,'defaultLocation',{
        get: function(){
            return defautlLocation;
        },
        set: function(value){
            if (!value.x || !value.y){
                throw new Error('Invalid location')
            }
            
            defautlLocation = value;
        }
    });

}  



const circle = new Circle(30);
circle.defautlLocation = 1;
console.log(circle.defautlLocation)
circle.draw()
// circle.getDefaultLocation()
