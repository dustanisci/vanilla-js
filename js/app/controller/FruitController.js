class FruitController {

  constructor() {
    this._form = document.querySelector('#form');
    this._inputName = document.querySelector('#name');
    this._inputQuantity = document.querySelector('#quantity');

    this._listFruits = new ListFruits();
    this._listFruitsView = new ListFruitsView(document.querySelector('#listFruitsView'));
    this._listFruitsView.update(this._listFruits);

    this._message = new Message();
    this._messageView = new MessageView(document.querySelector('#messageView'));
    this._messageView.update(this._message);
  }

  addAction(event) {
    event.preventDefault();

    this._listFruits.add(this._createFruit());
    this._listFruitsView.update(this._listFruits);

    this._message.text = 'Successfully added';
    this._messageView.addEffect();
    this._messageView.update(this._message);

    setTimeout(() => {
      this._message.text = '';
      this._messageView.removeEffect();
      this._messageView.update(this._message)
    }, 1000);

    this._cleanForm();
  }

  _createFruit() {
    return new Fruit(
      this._inputName.value,
      this._inputQuantity.value,
      DateHelper.dateToText(DateHelper.addDay(7))
    );
  }

  _cleanForm() {
    this._form.reset();
    this._inputName.focus();
    this._inputQuantity.value = 1;
  }

}