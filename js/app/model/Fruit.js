class Fruit {

  constructor(name, quantity, expire) {
    this._name = name;
    this._quantity = quantity;
    this._expire = expire;
    Object.freeze(this);
  }

  get name() {
    return this._name;
  }

  get quantity() {
    return this._quantity;
  }

  get expire() {
    return this._expire;
  }

}