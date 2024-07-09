// Lấy tất cả thẻ li là con của ul có id là myUL
const ul = document.getElementById("myUL");
const liList = ul.children;
console.log(liList);

// Duyệt qua từng thẻ li: 
//      Thêm sự kiện onclick cho từng thẻ li
//      Khi sự kiện diễn ra: Thêm/Xóa class checked vào

// Cách 1:
function test() {
    for (li of liList) {
        li.addEventListener("click", function() {
            li.classList.toggle("checked");
        });
        console.log(li);
    }
}


// Cách 2:
// Array.from(liList).forEach(li => {
//     li.addEventListener("click", function() {
//         li.classList.add("checked");
//     });
// });
    
// Cách 3:
// for (let i = 0; i < liList.length; i++) {
//         const li = liList[i];
//         li.addEventListener("click", function() {
//             li.classList.toggle("checked");
//     });
// }

// const o = {
//     x: 1,
//     test: function() {
//         this.x = 2;
//     }
// }

// const a = function() {

// }

// const b = a;

// Lần lặp 1: li = liList[0]
// Lần lặp 2: li = liList[1]
// ...
// Lần lặp 6: li = liList[5]

// function test() {
//     let dem = 0;
//     return function () {
//         dem++;
//         console.log(dem);
//     }
// }

// const f = test();
// f();
// f();
// f();