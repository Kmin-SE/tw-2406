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

// Đưa data trong array books lên giao diện
function renderBooks(bookList) {
  const parentDiv = document.getElementById("list");
  parentDiv.innerHTML = ""; // Xóa nội dung cũ trước khi render

  bookList.forEach(function(book, index) {
    const div = document.createElement("div");
    div.className = "item";

    const img = document.createElement("img");
    img.src = `./images/${book.id}.jpg`; // Đường dẫn đến hình ảnh
    img.alt = book.name;
    div.appendChild(img);
    
    const h2 = document.createElement("h2");
    h2.innerText = book.name;
    div.appendChild(h2);

    const p = document.createElement("p");
    p.innerText = book.price + " VND"; // Thêm đơn vị tiền tệ
    div.appendChild(p);

    parentDiv.appendChild(div);
  });
}


// chức năng hiển thị màu  khi người dùng nhấp vào ô màu
const colors = {
  yellow: "yellow",
  red: "red",
  blue: "blue",
  gradient: "linear-gradient(to right, yellow,red)"
}

const colorOptions = document.querySelectorAll(".color");

//forEach để lặp qua từng phần tử trong colorOptions
colorOptions.forEach(function(option) {  
  const colorKey = option.id;           //tìm màu tương ứng trong đối tượng colors.
  const colorValue = colors[colorKey];

  //Thiết lập màu nền cho các nhãn màu
  if (colorKey == "gradient") {
    option.style.background = colorValue;
  } else {
    option.style.backgroundColor = colorValue;
  }

  //Sự kiện click
  option.addEventListener("click", function() {
    const header = document.querySelector("header");
    if (colorKey === 'gradient') {
      header.style.background = colorValue;
    } else {
      header.style.backgroundColor = colorValue;
    }
  });
});


// Chức năng tìm kiếm theo tên
function searchByName() {
  // Input: Lấy keyword
  const keyword = document.getElementById("search").value.toLowerCase();  // Chuyển keyword sang chữ thường

  const result = [];
  // Process (thuật toán xử lý): Tìm những book trùng khớp với keyword (duyệt theo array books)
  for (let book of books) {
    if (book.name.toLowerCase().includes(keyword)) {  // Tìm kiếm không phân biệt chữ hoa chữ thường. (book.name.toLowerCase() == keyword), == yêu cầu chuỗi phải khớp hoàn toàn
      result.push(book);
    }
  }

  // Output: Render lại ra giao diện
  renderBooks(result);
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
  renderBooks(books);
  addEvents();
}
main();