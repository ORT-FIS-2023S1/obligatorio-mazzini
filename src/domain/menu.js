export class Menu {

    constructor(menuNombre, menuPrecio) {
      this.nombre = menuNombre;
      this.precio = menuPrecio;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(menuNombre) {
      this.nombre = menuNombre;
    }
  
    getprecio() {
      return this.precio;
    }
  
    setNombre(menuPrecio) {
      this.precio = menuPrecio;
    }
  
  }