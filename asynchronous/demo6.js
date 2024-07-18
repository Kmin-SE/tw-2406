console.log("start");

let p = new Promise((resolve, reject) => {
    console.log("excutor");
    let x = -1;
    if (x > 0)
        resolve();
    else {
        reject();
        console.log("x <= 0");
    }
        
});

p.then(
    () => {
        console.log('Promise đã resolve');
    },
    () => {
        console.log('Promise đã reject');
    }
);

console.log("end");