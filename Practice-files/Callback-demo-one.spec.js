/*//Method 1
// 
// // function a(callback){
//     console.log('Hi');
//     callback();
//     console.log('Bye');
// }

// function b(){
//     console.log('Welcome to javascript');
// }

// a(()=>{}); // we can pass empty arrow function to skip callback.


//Method 2
function a(callback,name){
    console.log('Hi');
    callback(name);
    console.log('Bye');
}

function b(name){
    console.log('Welcome to javascript',name);
}

a(b,'Arun')


function addToCart(callback, username, password){
    console.log('Click add to cart');
    callback(username,password);
    console.log('Successfully logged in');
}

function login(username, password){
    console.log('Enter username', username);
    console.log('Enter password', password);
    console.log('Click login');
}

addToCart(login,'Arun','12345');

*/

function a(callback){
//code
console.log('Hi');
callback()
}

function b(callback){
//code
console.log('Hello');
callback()
}

function c(callback){
//code
console.log('Welcome');
callback()
}

function d(callback){
//code
console.log('Arun');
callback()
}

// a(b(c(d))) ---> it is wrong

// a(()=>{
//     b(()=>{
//         c(d)
//     })
// })

//or

a(()=>{
    b(()=>{
        c(()=>{
            d(()=>{})
        })
    })
}) // we can call these call back functions in any order because all four functions has its callback function
// callback doesn't handle asynchronous functions
