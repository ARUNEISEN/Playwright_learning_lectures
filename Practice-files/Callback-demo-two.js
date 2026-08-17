function select_food(callback){
    console.log('Food added to the cart');
    callback();
}

function payment(callback){
    console.log('Order placed');
    // callback();
    setTimeout(callback,4000);
}


function received(callback){
    console.log('Food received');
}

select_food(()=>{
    payment(received)
})