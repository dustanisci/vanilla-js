class View {

  constructor(element) {
    this._element = element;
  }

  template() {
    throw new Error('This method has not been implemented');
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}