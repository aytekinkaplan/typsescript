/*
Undefined
    It represents uninitialized variables in TypeScript and JavaScript.
    It has only one value, which is undefined.
    The undefined keyword defines the undefined type in TypeScript,
    but it is not useful because we can only assign an undefined value to it.*/
//Variable declaration without assigning any value to it
var a;
console.log(a); //undefined
console.log(typeof (a)); //undefined
var undeclaredVar;
console.log(undeclaredVar); //Uncaught ReferenceError: undeclaredVar is not defined
