export class Menu {

    constructor(menuNombre, menuDescripcion, menuPrecio) {
      this.nombre = menuNombre;
      this.descripcion = menuDescripcion;
      this.precio = menuPrecio;
    }
  
    getNombre() {
      return this.nombre;
    }

    getPrecio() {
      return this.precio;
    }
    
    getDescripcion() {
      return this.descripcion;
    }
  }