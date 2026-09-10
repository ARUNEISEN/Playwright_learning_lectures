let arr=[1,1,3,3,'a','a','d','h','h'];
let obj = {};
for(let i of arr){
    if(i in obj){
        obj[i] += 1;
    }else{
        obj[i] = 1;
    }
}

console.log(obj);

let str = 'good morning';
let result = {};
for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        if (str[i] in result) {
            result[str[i]] += 1;
        }
        else {
            result[str[i]] = 1
        }
    }
}

console.log(result)