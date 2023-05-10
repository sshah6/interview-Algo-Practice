// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // str = str.split("").reverse().join("");
    // return str;

    //Or
    // let reversed = '';
    // for(let char of str){
    //     reversed = char + reversed;
    // }
    // return reversed;

    //Or

    return str.split("").reduce((rev, char)=> 
        char + rev, "");    
}
console.log(reverse("abcd"));

module.exports = reverse;

