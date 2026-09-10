/* let str = 'Good morning';
let result = '';

for(let i=str.length-1; i>=0; i--){
    result = result+str[i];
}

console.log(result);

//2nd problem

let word = '';
for(let i=0; i<str.length;i++){
    if(str[i] !== ' '){
        word = str[i]+word; //doog gninrom
    }else{
        result= result+word+' '// doog
        word = ''
    }

    
}
result = result +word

console.log(result)

// Function Approach
function reverseWords(str) {
    let result = '';
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            word = str[i] + word; //doog gninrom
        } else {
            result = result + word + ' '
            word = ''
        }


    }
    result = result + word

    console.log(result)

}

reverseWords('Welcome to Javascript');

//3rd approach using map
let input = 'Welcome to Javascript';
let reversed = '';

reversed = input.split(' ').map(word =>word.split('').reverse().join('')).join(' ')
console.log(reversed);

let res ='';
for(let w of input){
    let rev = '';
    for(let ch of w){
        rev = ch + rev;
    }

    res = res + rev + '';
}

console.log(res); */

const { array } = require("node:stream/iter");



let str = "Welcome to Playwright and GenAI learning";
let result ="";
let word="";
let wordIndex=0;

for(let i=0; i<str.length; i++){
    if(str[i] !==" "){
        if(wordIndex %2 ==0){
        word = str[i]+word;
        }else{
            word =word +str[i]
        }
    }else{
        result = result + word +" ";
        word="";
        wordIndex++;
    }
}

result = result + word;
console.log(result)



