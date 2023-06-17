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

    setNombre(menuNombre) {
      this.nombre = menuNombre;
    }
  
    setPrecio(menuPrecio) {
      this.precio = menuPrecio;
    }
    
    setDescripcion(menuDescripcion) {
      this.descripcion = menuDescripcion;
    }
  }

  // Menus

const ensalada = new Menu("Ensalada Crispy", "Ensalada de hojas verdes, tomátes y pollo rebosado", 200);
const hamburguesa = new Menu("Hamburguesa", "Hamburguesa con lechuga, tomáte, queso y cebolla", 230);
const sandwich = new Menu("Sandwich", "Sandwich de jamón, queso, tomáte y lechuga", 200);
const spaghetti = new Menu("Spaghetti", "Spaghetti con salsa de tomate", 250);
const empanadas = new Menu("Empanadas", "Empanadas de carne, capresse y verduras", 180);