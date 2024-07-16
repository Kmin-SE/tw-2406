const cv1 = (cvTiepTheo) => {
    console.log('Bat dau cong viec 1');
    setTimeout(() => {
        console.log('Ket thuc cong viec 1');
        cvTiepTheo();
    }, 1000);
}

const cv2 = (cvTiepTheo) => {
    console.log('Bat dau cong viec 2');
    setTimeout(() => {
        console.log('Ket thuc cong viec 2');
        cvTiepTheo();
    }, 2000);
}

const cv3 = () => {
    console.log('Bat dau cong viec 3');
    setTimeout(() => {
        console.log('Ket thuc cong viec 3');
    }, 3000);
}

// Đúng
cv1(() => {
    cv2(() => {
        cv3();
    })
});

// Sai
cv1(cv2(cv3)); // Truyền giá trị trả về của hàm cv2 cho tham số của cv1
cv1(cv2); // Truyền hàm cv2 cho tham số của cv1

a = test 
a = test()