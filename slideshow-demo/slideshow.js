const soLuongSlide = Number(prompt("Nhap so luong slide mong muon: ")); // Rui ro bi loi do du lieu nguoi dung nhap

const fileNames = ["anh1.jpg", "anh2.jpg", "anh3.jpg", "anh4.jpg"]; // Khong ton tai anh co ten nhu vay
themTatCaImg();

const slides = document.getElementsByClassName("slides");
const length = slides.length; // 3
let currentIndex = 0;
slides[currentIndex].style.display = "block"; // Hiện ra ảnh đầu tiên

// Sau mỗi 1000 ms thì sẽ chạy lại hàm hienThiSlideKeTiep
setInterval(hienThiSlideKeTiep, 1000);

function hienThiSlideKeTiep() {
    // Cho slide hiện tại là display: none
    slides[currentIndex].style.display = "none";

    currentIndex++;

    if (currentIndex == length)
        currentIndex = 0;
    
    // Cho slide kế tiếp là display: block
    slides[currentIndex].style.display = "block";
    
}

function taoTheImg(fileName) {
    const img = document.createElement("img");
    img.src = fileName;
    img.alt = fileName;
    img.style.width = "100%";
    // img.className = "slides fade";
    img.classList.add("slides", "fade");

    const slideShow = document.getElementsByClassName("slideshow")[0];
    slideShow.appendChild(img); // Them img vao lam con cua slideshow
}

function themTatCaImg() {
    for (let i = 0; i < soLuongSlide; i++) {
        taoTheImg(fileNames[i]);
    }
}


// taoTheImg("anh2.jpg");