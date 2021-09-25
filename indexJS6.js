let arr = [10, 20, 30, 50, 235, 3000,35];
for (let i = 0; i < arr.length; i++) {
    let variable = arr[i].toString()[0]
   if (variable === '1' || variable ==='2' || variable ==='5') {
       console.log(arr[i]);
   }
   else{
       continue;
   }
}
