export class Country {
  #nombre;
  #capital;
  constructor(aNombre) {
    this.#nombre = aNombre;
  }

  getNombre() {
    return this.#nombre;
  }

  setCapital(aCapital) {
    this.#capital = aCapital;
  }

  toString() {
    return `País: ${this.#nombre} - capital: ${this.#capital}`;
  }
}
