let arr = [10,20,5,3,40,35,100];

// largest number in the array
let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);

// Second largest number in the array
