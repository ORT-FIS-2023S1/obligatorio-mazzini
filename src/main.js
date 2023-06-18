window.addEventListener("load", inicio);

import { Sistema } from "./domain/sistema.js";
import { Menu } from "./domain/menu.js";
import { Pedido } from "./domain/pedido.js";
 
function inicio() {
  // Paginas visibles/no-visibles
  document.getElementById("navBar").style.display = 'block';
  document.getElementById("homePage").style.display = 'block';
  document.getElementById("menu").style.display = "none";
  document.getElementById("carrito").style.display = "none";
  document.getElementById("historial").style.display = "none";
  // Cambios de pagina
  document.getElementById("hpMenuBtn").addEventListener("click", mostrarMenu);
  document.getElementById("hpCarritoBtn").addEventListener("click", mostrarCarrito);
  document.getElementById("hpHistorialBtn").addEventListener("click", mostrarHistorial);
  document.getElementById("toHomePage").addEventListener("click", mostrarHomePage);
  document.getElementById("menuNavbar").addEventListener("click", mostrarMenu);
  document.getElementById("carritoNavbar").addEventListener("click", mostrarCarrito);
  document.getElementById("historialNavbar").addEventListener("click", mostrarHistorial);
  // Botones del menu
  document.getElementById("m1").addEventListener("click", agregarM1);
  document.getElementById("m2").addEventListener("click", agregarM2);
  document.getElementById("m3").addEventListener("click", agregarM3);
  document.getElementById("m4").addEventListener("click", agregarM4);
  document.getElementById("m5").addEventListener("click", agregarM5);
  document.getElementById("pedidoBtn").addEventListener("click", realizarPedido);
}


const homePage = document.getElementById("homePage");
const menuPage = document.getElementById("menu");
const carritoPage = document.getElementById("carrito");
const historialPage = document.getElementById("historial");

const listaMenus = [
  {nombre: "Ensalada Crispy", descripcion: "Ensalada de hojas verdes, tomátes y pollo rebosado", precio: 200}, 
  {nombre: "Hamburguesa", descripcion: "Hamburguesa con lechuga, tomáte, queso y cebolla", precio: 230}, 
  {nombre: "Sandwich", descripcion: "Sandwich de jamón, queso, tomáte y lechuga", precio: 200}, 
  {nombre: "Spaghetti", descripcion: "Spaghetti con salsa de tomate", precio: 250},
  {nombre: "Empanadas", descripcion: "Empanadas de carne, capresse y verduras", precio: 180}
];

const ensalada = new Menu("Ensalada Crispy", "Ensalada de hojas verdes, tomátes y pollo rebosado", 200);
const hamburguesa = new Menu("Hamburguesa", "Hamburguesa con lechuga, tomáte, queso y cebolla", 230);
const sandwich = new Menu("Sandwich", "Sandwich de jamón, queso, tomáte y lechuga", 200);
const spaghetti = new Menu("Spaghetti", "Spaghetti con salsa de tomate", 250);
const empanadas = new Menu("Empanadas", "Empanadas de carne, capresse y verduras", 180);


// Navegación
function ocultarTodasLasSecciones() {
  homePage.style.display = "none";
  menuPage.style.display = "none";
  carritoPage.style.display = "none";
  historialPage.style.display = "none";
}

function mostrarHomePage() {
  ocultarTodasLasSecciones();
  homePage.style.display = 'block';
}

function mostrarMenu() {
  ocultarTodasLasSecciones();
  menuPage.style.display = 'block';
}

function mostrarCarrito() {
  ocultarTodasLasSecciones();
  carritoPage.style.display = 'block';
}

function mostrarHistorial() {
  ocultarTodasLasSecciones();
  historialPage.style.display = 'block';
}
// Fin

// Tabla Carrito
function agregarEnCarrito(nombre, descripcion, precio) {
  const carritoTabla = document.getElementById('carritoTabla');
  const filaNueva = carritoTabla.insertRow();
  const menuCell = filaNueva.insertCell();
  const descrCell = filaNueva.insertCell();
  const precioCell = filaNueva.insertCell();

  menuCell.textContent = nombre;
  descrCell.textContent = descripcion;
  precioCell.textContent = precio;
}

function agregarM1() {
  agregarEnCarrito(ensalada.nombre, ensalada.descripcion, ensalada.precio);
  precioTotal(ensalada.precio);
  alert("¡Tu menú ha sido agregado al carrito correctamente!");
  menuAPedido(ensalada);
}

function agregarM2() {
  agregarEnCarrito(hamburguesa.nombre, hamburguesa.descripcion, hamburguesa.precio);
  precioTotal(hamburguesa.precio);
  alert("¡Tu menú ha sido agregado al carrito correctamente!");
  menuAPedido(hamburguesa);
}

function agregarM3() {
  agregarEnCarrito(sandwich.nombre, sandwich.descripcion, sandwich.precio);
  precioTotal(sandwich.precio);
  alert("¡Tu menú ha sido agregado al carrito correctamente!");
  menuAPedido(sandwich);
}

function agregarM4() {
  agregarEnCarrito(spaghetti.nombre, spaghetti.descripcion, spaghetti.precio);
  precioTotal(spaghetti.precio);
  alert("¡Tu menú ha sido agregado al carrito correctamente!");
  menuAPedido(spaghetti);
}

function agregarM5() {
  agregarEnCarrito(empanadas.nombre, empanadas.descripcion, empanadas.precio);
  precioTotal(empanadas.precio);
  alert("¡Tu menú ha sido agregado al carrito correctamente!");
  menuAPedido(empanadas);
}

var totalActual = 0;
function precioTotal(precioMenu) {
  totalActual += precioMenu;
  document.getElementById("precioTotal").textContent = totalActual;
}
// Fin

function menuAPedido(m) {
  pedido.push(m);
}

const pedido = [{}];
function realizarPedido() {
  
  const pedidoNuevo = new Pedido();
}


// Tabla Historial
function agregarEnHistorial(codPed, descripcion, precio) {
  const carritoTabla = document.getElementById('carritoTabla');
  const filaNueva = carritoTabla.insertRow();
  const menuCell = filaNueva.insertCell();
  const descrCell = filaNueva.insertCell();
  const precioCell = filaNueva.insertCell();

  menuCell.textContent = nombre;
  descrCell.textContent = descripcion;
  precioCell.textContent = precio;
}