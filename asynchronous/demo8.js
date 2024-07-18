let p = new Promise((resolve, reject) => {
    let x = -1;
    if (x > 0)
        resolve(x);
    else
        reject('Error');
});

p
    .then((value) => {
        console.log(value);
    })
    .catch((value) => {
        console.log(value);
    });
