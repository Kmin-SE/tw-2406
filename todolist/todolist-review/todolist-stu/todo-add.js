function newElement() {
  // lấy value từ input
  var inputValue = document.getElementById("myInput").value;
  // validate value
  if (inputValue === "") {
    alert("khong duoc de trong");
    return;
  }
  // tạo li mới với conten là value
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t); // <li>t<li/>
  // thêm li mới vào trong ul
  document.getElementById("myUL").appendChild(li);
}
