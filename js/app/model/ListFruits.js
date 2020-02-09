class ListFruits {

  constructor() {
    this._fruits = [];
  }

  add(fruit) {
    this._fruits.push(fruit);
  }

  get fruits() {
    return [].concat(this._fruits);
  }

}