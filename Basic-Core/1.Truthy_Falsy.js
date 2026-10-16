// Javascript Core Concept

// Truthy And Falsy


if("hello"){
    console.log("Trurhy")
}


if(0){
    console.log("Falsy")
}


// check boolean type
Boolean("hello") //true -> truthy
Boolean(0) // false -> falsy
!!"hello" // true



// Example Truthy
const isLoggedIn = true;

if(isLoggedIn){
    console.log("Welcome Back!");
};


if("Shakil"){
    console.log("This code will run");
};

// Example Truthy

if(""){
    console.log('This code will run')
}


const products = [];

if(products.length > 0){
    console.log("Product Available")
}else{
    console.log("No Produts found ")
}