export class Pedido {
  constructor(codigoPed, descrPed, fechaPed, costoPed) {
    this.codigo = codigoPed;
    this.descripcion = descrPed;
    this.fecha = fechaPed;
    this.costo = costoPed;
  }

  getCodigo() {
    return this.codigo;
  }

  getDescripcion() {
    return this.descripcion;
  }

  getFecha() {
    return this.fecha;
  }

  getCosto() {
    return this.costo;
  }
}
