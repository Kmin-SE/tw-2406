function addListenersToItems(items) {
    for (let item of items) {
        item.addEventListener("click", function () {
            this.classList.toggle("checked");
        });
    }
}

// Add initial event listeners to existing list items
let listItems = document.getElementsByTagName("li");
addListenersToItems(listItems);

// Create a "close" button and append it to each list item
function addCloseButton(listItems) {
    let closeButton = document.createElement("SPAN");
    let closeSymbol = document.createTextNode("\u00D7");
    closeButton.className = "close";
    closeButton.appendChild(closeSymbol);
    listItems.appendChild(closeButton);

    closeButton.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    };
}

// Add close buttons to initial list items
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    addCloseButton(myNodelist[i]);
}

// Function to create a new list item
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("You must type something on title");
    } else {
        document.getElementById("myUL").appendChild(li);
        addListenersToItems([li]);
        addCloseButton(li);
    }
    document.getElementById("myInput").value = "";
}
