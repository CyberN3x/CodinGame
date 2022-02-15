const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

var letters = T.toUpperCase().split('');

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'.split('');
var alphabetMap = {};

for (let j = alphabet.length - 1; j >= 0; j--){
    alphabetMap[alphabet[j]] = [];
}

for (let i = 0; i < H; i++) {
    var ROW = readline();
    var letterIndex = 0;
    for (var j = 0; j < alphabet.length; j++){
       var thisLetter = alphabet[j];
       alphabetMap[thisLetter][i] = ROW.substr(letterIndex, L);
       letterIndex += L;
    }
}

var results = '';
for (var n = 0; n < H; n++){
    for (var m = 0; m < letters.length; m++){
        var thisLetter = letters[m];
        if ((thisLetter < 'A') || (thisLetter >'Z')){
            thisLetter = '?';
        }
        results += alphabetMap[thisLetter][n];
    }
    results += '\n';
}
console.log(results);

