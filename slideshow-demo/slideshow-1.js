// alert("Hello, world");
// console.log("console nè");

// Lấy ra tất cả img
// const imgTags = document.getElementsByTagName("img");
// console.log(imgTags);
// console.log(imgTags[0]);

// const slides = document.getElementsByClassName("slides");
// console.log(slides[0]);

// const slides = document.querySelectorAll(".slides");
// console.log(slides[0]);

// ============
// const slides = document.getElementsByClassName("slides");
// const slide0 = slides[0];
// console.log(slide0.src); // Lấy thuộc tính src của element


// const slideshow = document.getElementsByClassName("slideshow")[0];
// console.log(slideshow.children[0]);

// =======
// const slides = document.getElementsByClassName("slides");
// const slide0 = slides[1];
// slide0.style.display = "block";


// ========
// const nextButton = document.getElementsByClassName("sau")[0];
// nextButton.onclick = function () {
//     alert("Ok nè");
// }


const slides = document.getElementsByClassName("slides");
const length = slides.length; // 3
let currentIndex = 0;
slides[currentIndex].style.display = "block"; // Hiện ra ảnh đầu tiên

// Sau mỗi 1000 ms thì sẽ chạy lại hàm hienThiSlideKeTiep
setInterval(hienThiSlideKeTiep, 1000);

// Sau 1000ms thì thực hiện hàm 1 lần duy nhất
// setTimeout(() =>  {}, 1000);

function hienThiSlideKeTiep() {
    // Cho slide hiện tại là display: none
    slides[currentIndex].style.display = "none";

    currentIndex++;

    if (currentIndex == length)
        currentIndex = 0;
    
    // Cho slide kế tiếp là display: block
    slides[currentIndex].style.display = "block";
    
}



// const slides = document.getElementsByClassName("slides");
// let slide = slides[0];
// slide.style.display = "block";

// function hienThiSlideKeTiep() {
//     // Cho slide hiện tại là display: none
//     slide.style.display = "none";
//     // Cho slide kế tiếp là display: block
//     slide = slide.nextElementSibling;
//     slide.style.display = "block";
// }


// const slides = document.getElementsByClassName("slides");
// let slide0 = slides[0];
// slide0.style.display = "block";
// function hienThiSlideKeTiep() {
//     // Cho slide hiện tại là display: none
//     slide0.style.display = "none";
//     // Cho slide kế tiếp là display: block
//     slide0.nextElementSibling.display = "block";
// }




