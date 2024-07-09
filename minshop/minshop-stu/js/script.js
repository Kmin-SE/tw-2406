let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];


// Đưa data trong array books lên giao diện
{/* 
    <div class="item">
      <img src="./images/01.jpg" alt="">
      <h2>Cuốn sách A</h2>
      <p>150.000</p>
    </div> 
*/}
function renderBooks() {
  const parentDiv = document.getElementById("list");
  for (let book of books) {
    const div = document.createElement("div");
    div.className = "item";
    
    const h2 = document.createElement("h2");
    h2.innerText = book.name;
    div.appendChild(h2);

    parentDiv.appendChild(div);
  }
}

function renderBooks2() {
  const parentDiv = document.getElementById("list");
  for (let book of books) {

    const div = document.createElement("div");
    div.className = "item";
    
    div.innerHTML = `
      <h2>${book.name}</h2>
    `;

    parentDiv.appendChild(div);
  }
}

function renderBooks3(booksData) {
  const parentDiv = document.getElementById("list");
  parentDiv.innerHTML = "";
  for (let book of booksData) {
    parentDiv.innerHTML += `
      <div class="item">
        <h2>${book.name}</h2>
      </div> 
    `;
  }
}
//reduce (iteration)

// Chức năng tìm kiếm theo tên
function searchByName() {
  // Input: Lấy keyword
  const keyword = document.getElementById("search").value;

  const result = [];
  // Process: Tìm những book trùng khớp với keyword (duyệt theo array books)
  for (let book of books) {
    if (book.name == keyword) {
      result.push(book);
    }
  }

  // Output: Render lại ra giao diện
  renderBooks3(result);
}

function addEvents() {
  const input = document.getElementById("search");
  input.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
      searchByName();
    }
  });
}

function main() {
  renderBooks3(books);
  addEvents();
}

main();