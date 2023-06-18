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

  setCodigo(codPed) {
    if (codPed.length = 5) {
      this.codigo = codPed;
    } else {
      throw new Error('El código debe tener 5 caracteres');
    }
  }

  setDescipcion(descrPed) {
    this.pedido = descrPed;
  }

  setFecha(fechaPed) {
    this.fecha = fechaPed;
  }

  setCosto(costoPed) {
    this.costo = costoPed;
  }
}
