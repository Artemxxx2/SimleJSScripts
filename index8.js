let exam = document.querySelector('.exam')
let projects = document.querySelector('.projects')
let btn = document.querySelector('.btn')
btn.addEventListener('click',finalGrade)
function finalGrade() {
   let exam1 = Number(exam.value)
   let projects1 = Number(projects.value)
   if (exam1 > 90 && projects1 > 10) {
       alert('finalGrade is 100')
   }
   else if(exam1 > 75 && projects1 > 4){
        alert('finalGrade is 90')
   }
   else if(exam1 > 50 && projects1 > 1){
         alert('finalGrade is 75')
   }
   else{
         alert('finalGrade is 0')
   }
}