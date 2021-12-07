//123saff
function name(arr1,arr2) {
    let accum1 =arr1.reduce((prev,current)=>{
        prev = prev*current
         return prev
        })
    let accum2 =arr2.reduce((prev,current)=>{
            prev = prev*current
             return prev
            })
    return accum1 - accum2;
}
//111
console.log(name([1,2,3],[1,2,7]));
