export class BookManager {
    constructor(...books) {
        this._books = books;
    }

    //getter
    get books() {
        return this._books;
    }

    //setter
    set books(newBooks) {
        this._books = newBooks;
    }

    searchByName(keyword) {
        keyword = keyword.toLowerCase();
        const objectBook = this.books;

        let arrayBook = [];
        for (let i = 0; i < objectBook.length; i++) {
            if (objectBook[i].name.toLowerCase().includes(keyword))
                arrayBook.push(objectBook[i]);
        }
        return arrayBook;
    }

    filterBookByPrice(min, max) {
        const objectBook = this.books;
        let newArray = [];
        let indexOfArray = -1;
        for (let i = 0; i < objectBook.length; i++) {
            if (objectBook[i].price >= min && objectBook[i].price <= max) {
                indexOfArray++;
                newArray[indexOfArray] = objectBook[i];
            }
        }
        return newArray;
    }

    filterByProviders(providers) {
        providers = providers.map((provider) => provider.toLowerCase());
        return this.books.filter((book) =>
            providers.includes(book.provider.toLowerCase())
        );
    }

    sortByName() {
        return [...this.books].sort((a, b) => a.name.localeCompare(b.name));
    }

    sortByPrice() {
        return [...this.books].slice().sort((a, b) => a.price - b.price);
    }
}
