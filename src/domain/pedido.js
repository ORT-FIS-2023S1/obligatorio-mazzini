
export class Pedido {

    constructor(codigoPed, fechaPed, costoPed) {
      this.codigo = codigoPed;
      this.fecha = fechaPed;
      this.costo = costoPed
    }
  
    getCodigo() {
      return this.codigo;
    }

    getCosto() {
      return this.costo;
    }
  
  }