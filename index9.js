let arr = [1, 2, 3, 4]
let res=1
function arrmultiplication(arr) {
    for (let i = 0; i < arr.length; i++) {
        res*=arr[i] 
    }
    return console.log(res);
}
arrmultiplication(arr)