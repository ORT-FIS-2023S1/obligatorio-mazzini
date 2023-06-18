import { Menu } from "../domain/menu.js";

const ensalada = new Menu("Ensalada Crispy", "Ensalada de hojas verdes, tomátes y pollo rebosado", 200);
const hamburguesa = new Menu("Hamburguesa", "Hamburguesa con lechuga, tomáte, queso y cebolla", 230);
const sandwich = new Menu("Sandwich", "Sandwich de jamón, queso, tomáte y lechuga", 200);
const spaghetti = new Menu("Spaghetti", "Spaghetti con salsa de tomate", 250);
const empanadas = new Menu("Empanadas", "Empanadas de carne, capresse y verduras", 180);

export class Sistema{
	constructor(){
		this.listaMenus = [];
		this.listaPedidos = [];
	}

	agregarMenu(menu){
	    this.listaMarcas.push(menu);
	}

	agregarPedido(pedido){
	    this.listaPedidos.push(pedido);
	}
	
	
}