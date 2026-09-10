// //1st approach
// // function findOccurances(word){
// //     let obj ={};
// //     for(let ch of word){
// //         if(obj[ch]){  // if(ch in obj)  --> this also correct
// //             obj[ch] += 1;
// //         }else{
// //             obj[ch] = 1;
// //         }
// //      }
// //      console.log(obj);
// // }

// // findOccurances('Good')

// // //2nd approach
// // let word = 'Good'
// // let obj = {}


// // for (let ch of word) {
// //     if (ch in obj) {
// //         obj[ch] += 1;
// //     } else {
// //         obj[ch] = 1;
// //     }
// // }
// // console.log(obj);

// // //3rd approach
// // let tex = 'Good'
// // let re = {}
// // for (let ch of tex) {
// //    res[ch] = (res[ch] || 0) + 1;
// //    }

// // console.log(re)

// // let text = 'Good'
// // let res = {}
// // for (let ch of text) {
// //    res[ch] = res[ch] ? res[ch]+1 :  1;
// //    }

// // console.log(res)


// //4th approach
// function findOccurances(word){
//     let obj ={};
//     for(let ch of word){
//         if(ch===" "){
//             continue
//         }
//         else if(obj[ch]){  // if(ch in obj)  --> this also correct
//             obj[ch] += 1;
//         }else{
//             obj[ch] = 1;
//         }
//      }
//      console.log(obj);
// }

// findOccurances('Good  morning');

//5th approach

// let tex = 'Good morning'
// let re = {}
// for (let ch of tex) {
//     if(ch === " "){
//         continue;
//     }
//    re[ch] = (re[ch] || 0) + 1;
//    }

// console.log(re)

let tex = 'good morning'
let re = {}

for (let ch of tex) {
    if(ch != " "){
        re[ch] = (re[ch] || 0) + 1;
    }    
}


console.log(re)
for (let ch in re){
if(re[ch] > 1){
    console.log(ch, re[ch]);
}
}



