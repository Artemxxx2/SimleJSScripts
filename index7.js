let weight=3;
let recommendation;
if (weight <4) {
    let recommendation = 'Пора перекусить';
    console.log(recommendation);
}
else if(weight >4 && weight < 5.5 ){
    let recommendation = 'Вес в норме';
    console.log(recommendation);
}
else if(weight > 5.5 ){
    let recommendation = 'Пора на тренировку';
    console.log(recommendation);
}