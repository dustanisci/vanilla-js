class ListFruitsView extends View {

  constructor(element){
    super(element);
  }

  template(model) {
    let i = 1;
    return `
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Expiration</th>
          </tr>
        </thead>
        <tbody>
          ${model.fruits.map(fruit => `
              <tr>
                <td>${i++}</td>
                <td>${fruit.name}</td>
                <td>${fruit.quantity}</td>
                <td>${fruit.expire}</td>
              </tr>
          `).join('')}
        </tbody>
        <tfoot>
          <td colspan="1">Total</td>
          <td colspan="1"> - </td>
          <td colspan="1">
            ${this.amount(model)}
          </td>
          <td colspan="1"> - </td>
        </tfoot>
      </table>
    `;
  }

  amount(model) {
    const amount = model.fruits.reduce((total, n) => total + Number(n.quantity), 0.0);
    if (amount && amount != 0) {
      return amount;
    }
    return "-";
  }

}