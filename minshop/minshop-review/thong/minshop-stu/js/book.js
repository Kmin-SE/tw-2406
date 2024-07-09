export class Book {
    constructor(id, name, price, provider) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._provider = provider;
    }
    //getter ID of the book
    get id() {
        return this._id;
    }
    //setter ID of the book
    set id(id) {
        this._id = id;
    }
    //getter name of the book
    get name() {
        return this._name;
    }
    //setter name of the book
    set name(name) {
        this._name = name;
    }
    //getter price of the book
    get price() {
        return this._price;
    }
    //setter price of the book
    set price(price) {
        this._price = price;
    }
    //getter provider of the book
    get provider() {
        return this._provider;
    }
    //setter provider of the book
    set provider(provider) {
        this._provider = provider;
    }
}
