function between(a,b) {
    if (a>b) {
        return console.log(`An error occured ${a} is bigger than ${b}`);
    }
    else{
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }
}
between(-10,15)