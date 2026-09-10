let sentence = "JavaScript is powerful for web automation testing";
let words = [];
let wor = "";

for (let ch of sentence + " ") {
    if (ch == " ") {
        words.push(wor);
        wor = "";
    } else {
        wor += ch;
    }
}

words.sort((a, b) => a.length - b.length);

console.log(words.join(" "));
