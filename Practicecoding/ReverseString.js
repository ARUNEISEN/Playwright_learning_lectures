let str = 'Rajkiran';
let result = '';

for(let i = str.length -1; i>=0; i--){
    result +=str[i];
}

console.log(result);
result='';

for(let j=0; j<str.length; j++){
    result = str[j]+result;
}
console.log(result);