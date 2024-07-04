// lấy tất cả các thẻ li trong thẻ ul có id là myUL

const ul = document.getElementById("myUL");
const liList = ul.children;
console.log(liList);

// duyệt qua từng thẻ li: thêm sự kiên onclick cho từng thẻ li
// khi sự kiện diễn ra thêm/xoá class checked vào
//

for (li of liList) {
  li.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
  console.log(li);
}
