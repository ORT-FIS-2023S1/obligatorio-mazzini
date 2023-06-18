
export class Pedido {

    constructor(codigoPed, fechaPed, costoPed) {
      this.codigo = codigoPed;
      this.fecha = fechaPed;
      this.costo = costoPed
    }
  
    getCodigo() {
      return this.codigo;
    }

    getFecha() {
      return this.fecha;
    }

    getCosto() {
      return this.costo;
    }
    
    setCodigo(cod) {
      this.codigo = cod;
    }
  }