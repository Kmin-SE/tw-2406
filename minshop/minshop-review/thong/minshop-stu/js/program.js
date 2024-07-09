import { booksData } from "./data.js";
import { Book } from "./book.js";
import { BookManager } from "./book-manager.js";

class Program {
    constructor() {
        this.bookManager = new BookManager();
        this.loadData(booksData);
        this.loadElement();
        this.initEvent();
    }
    loadData(data) {
        const books = [];
        for (let item of data) {
            const newBook = new Book(
                item.id,
                item.name,
                item.price,
                item.provider
            );
            books.push(newBook);
        }
        this.bookManager.books = books;
    }

    loadElement() {
        this.listOfDiv = document.getElementById("list");
        this.inputSearch = document.getElementById("search");
        this.inputMinPrice = document.getElementById("min-price");
        this.inputMaxPrice = document.getElementById("max-price");
        this.filterBtn = document.getElementById("apply-price-filter");
        this.providerCheckbox = document.querySelectorAll(
            'input[name^="provider-"]'
        );
        this.sortBySelect = document.getElementById("sort-by");
        this.header = document.querySelector("header");
        this.color = document.getElementById("colors");
    }
    //             <div class="item">
    //                 <img src="./images/01.jpg" alt="">
    //                 <h2>Cuốn sách A</h2>
    //                 <p>150.000</p>
    //             </div>

    render() {
        this.listOfDiv.innerHTML = "";
        // for (let i = 0; i < this.bookManager.books.length; i++) {
        //     const { id, name, price } = this.bookManager.books[i];

        // const sortBy = this.sortBySelect.value;

        // if (sortBy === "sort by price") {
        //     filteredBooks = this.bookManager.sortByPrice();
        // } else if (sortBy === "sort by name") {
        //     filteredBooks = this.bookManager.sortByName();
        // }

        const checkedProviders = Array.from(this.providerCheckbox)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) =>
                checkbox.nextElementSibling.textContent.toLowerCase()
            );

        if (checkedProviders.length === 0) {
            // If haven't provider is chosen ===> load all the books
            this.bookManager.books.forEach(({ id, name, price }) => {
                const divItem = document.createElement("div");
                divItem.className = "item";

                const img = document.createElement("img");
                img.src = `./images/0${id}.jpg`;

                const h2 = document.createElement("h2");
                h2.innerHTML = name;

                const p = document.createElement("p");
                p.innerHTML = price.toString();

                divItem.appendChild(img);
                divItem.appendChild(h2);
                divItem.appendChild(p);

                this.listOfDiv.appendChild(divItem);
            });
        } else {
            // If have providers is chosen, only display the book of this providers
            this.bookManager.books.forEach(({ id, name, price, provider }) => {
                if (checkedProviders.includes(provider.toLowerCase())) {
                    const divItem = document.createElement("div");
                    divItem.className = "item";

                    const img = document.createElement("img");
                    img.src = `./images/0${id}.jpg`;

                    const h2 = document.createElement("h2");
                    h2.innerHTML = name;

                    const p = document.createElement("p");
                    p.innerHTML = price.toString();

                    divItem.appendChild(img);
                    divItem.appendChild(h2);
                    divItem.appendChild(p);

                    this.listOfDiv.appendChild(divItem);
                }
            });
        }
    }
    initEvent() {
        const t = this.bookManager;

        const clear = this.clear.bind(this);
        const render = this.render.bind(this);
        const loadData = this.loadData.bind(this);

        // Event search by input
        this.inputSearch.addEventListener("input", function () {
            const inputKeyword = this.value;
            if (inputKeyword == "") {
                loadData(booksData);
            } else {
                const result = t.searchByName(inputKeyword);
                t.books = result;
            }
            clear();
            render();
        });

        //Event filter price of book
        this.filterBtn.addEventListener(
            "click",
            function () {
                const minInput = parseFloat(this.inputMinPrice.value) || 0;
                const maxInput =
                    parseFloat(this.inputMaxPrice.value) || Number.MAX_VALUE;
                const result = t.filterBookByPrice(minInput, maxInput);
                t.books = result;
                clear();
                render();
            }.bind(this)
        );

        //Event provider check box
        this.providerCheckbox.forEach((checkbox) => {
            checkbox.addEventListener("change", function () {
                clear();
                render();
            });
        });

        this.sortBySelect.addEventListener("change", function () {
            clear();
            render();
        });

        this.color.addEventListener("click", (event) => {
            const colorId = event.target.id;
            if (colorId === "yellow") {
                this.header.style.background = "#fcbf16";
            } else if (colorId === "red") {
                this.header.style.background = "#992154";
            } else if (colorId === "blue") {
                this.header.style.background = "#173451";
            } else if (colorId === "gradient") {
                this.header.style.background =
                    "linear-gradient(to right, #fcbf16, purple)";
            }
        });
    }
    clear() {
        this.listOfDiv.innerHTML = "";
    }

    run() {
        this.render();
    }
}

const play = new Program();
play.run();
