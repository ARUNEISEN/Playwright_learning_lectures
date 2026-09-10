/* const words = [
    "madam",
    "level",
    "radar",
    "civic",
    "refer",
    "rotor",
    "kayak",
    "racecar",
    "tenet",
    "noon"
];
 */
let word = 'racecar';
let reverse = '';
for(let i = word.length - 1; i >= 0; i--){
    reverse = reverse+word[i];
}

// console.log(reverse);
if(reverse === word){
    console.log('Palindrome');
}else{
    console.log('Not a Palindrome');
}

// reverse function

let str = "level";
let reversed = '';
reversed = str.split('').reverse().join('');
if(reversed === str){
    console.log('Palindrome');
}else{
    console.log('Not a Palindrome');
}
