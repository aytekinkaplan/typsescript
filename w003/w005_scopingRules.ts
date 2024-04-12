/*
For other language programmers, they are getting some odd scoping rules for var declaration
    in JavaScript. Variables declared in TypeScript with the var keyword have function scope.
    This variable has global scope in the function
    where they are declared. It can also be accessed by any function which shares the same scope.*/

function f()
{
    var X = 5; //Available globally inside f()
    if(true)
    {
        var Y = 10; //Available globally inside f()
        console.log(X); //Output 5
        console.log(Y); //Output 10
    }
    console.log(X); //Output 5
    console.log(Y); //Output 10
}
f();
//console.log(X); //Returns undefined because value cannot access from outside function
//console.log(Y); //Returns undefined because value cannot access from outside function
