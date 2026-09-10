/* let arr = [0,1,0,2,3,0,4];
let res1 = [];
let res2 = [];
let final;
 for(let i =0; i<arr.length;i++){
    if(arr[i] != 0){
        res1.push(arr[i]);
    }else{
        res2.push(arr[i]);
    }

    final = res1.concat(res2)
}

let index = 0;
for(let i =0; i<arr.length;i++){
   if(arr[i] != 0){

   }
}
console.log(final); */

let numArray = [0,1,0,2,3,0,4,,0]

let nonZero = arr.filter(x => x!=0);
let zero = arr.filter(x => x=0);
let result = nonZero.concat(zero);
console.log(result);

