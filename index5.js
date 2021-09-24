let val1 = document.querySelector('.val1')
let val2 = document.querySelector('.val2')
let btn = document.querySelector('.output')
btn.addEventListener('click',compareIt)
function compareIt() {
    let val1Modified = Number(val1.value)
    let val2Modified = Number(val2.value)
    if (val1Modified >val2Modified) {
       return alert(val1Modified+val2Modified)
    }
    else if(val1Modified<val2Modified){
        return alert(val1Modified*val2Modified)
    }
    else{
        return alert('Numbers are equal')
    }
}