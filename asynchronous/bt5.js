// 1. Viết hàm in ra chuỗi đảo ngược của một chuỗi cho trước. (printReverse)

function printReverse(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    console.log(joinArray);
}

// 2. Viết một hàm checkAfter, có tham số là một chuỗi str và một số t. Sau thời gian t giây, thực hiện yêu cầu: Nếu str khác rỗng, chuỗi đảo ngược của str sẽ được in ra (bằng cách gọi hàm printReverse) , ngược lại, nếu str là rỗng, sẽ in ra lỗi "Chuỗi không hợp lệ".

function checkAfter(str, t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (str != "") {
                printReverse(str);
            }
            else {
                console.log("Chuỗi không hợp lệ");
            }
        }, t*1000);
    });
}

function preprocessing(str) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            str = str.trim();
            resolve(str);
        }, 3000);
    });
    return p;
}

preprocessing("   hello")
    .then((value) => {
        return checkAfter(value, 2);
    })
    .then(() => {
        console.log("end");
    });