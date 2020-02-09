class DateHelper {

  constructor() {
    throw new Error('Date Helper must not be instantiated');
  }

  static addDay(quantity) {
    return new Date().setDate(new Date().getDate() + quantity);
  }

  static dateToText(date) {
    date = new Date(date);
    return `${this.checkDigit(date.getDate())}/${this.checkDigit(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  static checkDigit(value) {
    if (value < 10) {
      return 0 + value.toString();
    }
    return value;
  }

}