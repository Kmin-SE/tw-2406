let ul = document.getElementById("myUL");
let li = ul.children;
/**
 * Check phan tu
 */
const checkedToDo = () => {
  let li = ul.children;
  for (let index of li) {
    addEventForLi(index);
  }
};

// Tạo sự kiện click cho thẻ li
function addEventForLi(liTag) {
  liTag.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
}

/**
 * Tao phan tu moi
 */

function newElement() {
  let myInput = document.getElementById("myInput");
  const li = document.createElement("li");
  li.innerText = myInput.value;
  li.appendChild(createSpanX());
  ul.appendChild(li);
  // main()
  addEventForLi(li);
  li.children[0].addEventListener("click", function () {
    li.remove();
  });
  myInput.value = "";
}

/**
 * Tao nut xoa todo
 * @returns span - tra ve element span xoa
 */
const createSpanX = () => {
  const span = document.createElement("span");
  span.innerText = "x";
  span.classList.add("close");
  span.addEventListener("click", function () {
    this.parentElement.remove();
  });
  return span;
};

const main = () => {
  //Tao the xoa
  for (let index of li) {
    index.appendChild(createSpanX());
  }
  checkedToDo();

  removeToDo();
};
main();
