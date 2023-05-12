// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxCount = 0;   //to store the max number
    let maxChar = '';   //to stor the max character
    const chars = {};   //to put chars in an object to compare
    for(let char of str){
        if(!chars[char]){       //if the char does not exist, throw a 1
            chars[char] = 1;
        }else{
            chars[char]++;      //if the char already exist increment it
        }
        if(chars[char] > maxCount){//if the char number in object is greater than the maxCount var
            maxCount = chars[char];//give the var the value of the incremented number
            maxChar = char;         //the character with highest val is the maxChar
        }
    }
    return maxChar;
}
console.log(maxChar("ab1c1d1e1f1g1"));
console.log(maxChar("abcdefghijklmnaaaaa"));

module.exports = maxChar;
