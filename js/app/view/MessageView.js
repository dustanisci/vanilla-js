class MessageView extends View {

  constructor(element){
    super(element);
  }

  template(model) {
    return model.text ? `<label class="d-block p-3">${model.text}</label>` : '';
  }

  addEffect() {
    this._element.classList.add('effect');
  }

  removeEffect() {
    this._element.classList.remove('effect');
  }
}