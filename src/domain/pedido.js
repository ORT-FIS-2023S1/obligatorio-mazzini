import { Menu } from "../domain/menu";

export class Pedido {

    constructor(descrPed, fechaPed, codigoPed, costoPed) {
      this.descripcion = descrPed;
      this.fecha = fechaPed;
      this.codigo = codigoPed;
      this.costo = costoPed
    }
  
    getDescripcion() {
      return this.descripcion;
    }
  
    setDescripcion(descr) {
      this.descripcion = descr;
    }
  
    getCosto() {
      return this.costo;
    }
    
    getCodigo() {
        return this.codigo;
    }
  
    setNombre(menuPrecio) {
      this.precio = menuPrecio;
    }
  
  }