// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // let reversedInt = parseInt(n.toString()
    // .split("")
    // .reverse()
    // .join(""));
    // if(n < 0)
    // return reversedInt * -1;
    // return reversedInt;
    let reversed = '';
    let reversedInt = n.toString();
    for(let char of reversedInt){
        reversed = char + reversed;
    }
    reversed = parseInt(reversed);
    if(n < 0){
        return reversed * -1;
    }
    return reversed;
}

console.log(reverseInt(1234));
console.log(reverseInt(90));
console.log(reverseInt(-1));

module.exports = reverseInt;
