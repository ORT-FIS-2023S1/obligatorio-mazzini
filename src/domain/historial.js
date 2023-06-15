export class Historial {

    #nombre;
    #capital;
  
    constructor(aNombre) {
      this.#nombre = aNombre;
    }
  
    getNombre() {
      return this.#nombre;
    }
  
    setCapital(aCapital) {
      this.#capital = aCapital
    }
  
 
  
  }