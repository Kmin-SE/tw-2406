let p = new Promise((resolve, reject) => {
    let x = -1;
    if (x > 0)
        resolve();
    else
        reject();
    console.log('Tạo xong Promise');
});

p
    .then(() => {
        console.log('Promise đã resolve');
    })
    .catch(() => {
        console.log('Promise đã reject');
    });

console.log('Kết thúc chương trình');
