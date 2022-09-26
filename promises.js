function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            return reject(new Error('Division by zero'));
        }

        resolve(a / b);
    })
}

divide(10, 0)
    .then(result => console.log(`Division Success: ${result}`))
    .catch(err => console.log('Error during division:', err));