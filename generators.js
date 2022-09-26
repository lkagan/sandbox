function* getOdd(max) {
    for (let i = 1; i <= max; i += 2) {
        yield i;
    }
}

for (value of getOdd(5)) {
    console.log(value);
}