function getObject(produtDetails){
    const projectInformation = {};
    const info = produtDetails.map(prod=>{return prod.split(" ")});
    console.log(info);

}

getObject(["I am Arun kumar "]);