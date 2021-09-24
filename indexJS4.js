let arr =  ['Саша', 'Петя', 'Оксана'];
// prototype implementetion
Array.prototype.reverseModified = function() {
    let resultArray = [];
    for (let i= this.length-1;i>=0; i--) {
        resultArray.push(this[i])
    }
    return resultArray
}
let res =  arr.reverseModified();
console.log(res);
Array.prototype.reverseUnModified = function() {
    for (let i= this.length-1;i>=0; i--) {
        console.log(this[i]);
    }
}
arr.reverseUnModified()