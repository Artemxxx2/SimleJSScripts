function switcheroo(str) {
    let arr = [...str];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            arr2.push('b')
        }
        else if(arr[i] === 'b'){
            arr2.push('a')
        }
        else{
            arr2.push(arr[i])
        }
    }
    return console.log( arr2.toString());
}

switcheroo('abc') 
switcheroo('aaabcccbaaa') 
switcheroo('ccccc') 
switcheroo('acb');
switcheroo('aabacbaa');