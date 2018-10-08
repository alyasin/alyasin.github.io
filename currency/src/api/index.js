export class API {
  static getCurrency(from, to) {
    return fetch(
      `http://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y`,
    )
  }
}
