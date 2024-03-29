window.addEventListener('load', inicio);

import {Menu} from './domain/menu.js';
import {Pedido} from './domain/pedido.js';

function inicio() {
  // Paginas visibles/no-visibles
  document.getElementById('navBar').style.display = 'block';
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('carrito').style.display = 'none';
  document.getElementById('historial').style.display = 'none';
  // Cambios de pagina
  document.getElementById('hpMenuBtn').addEventListener('click', mostrarMenu);
  document.getElementById('hpCarritoBtn').addEventListener('click',
      mostrarCarrito);
  document.getElementById('hpHistorialBtn').addEventListener('click',
      mostrarHistorial);
  document.getElementById('toHomePage').addEventListener('click',
      mostrarHomePage);
  document.getElementById('menuNavbar').addEventListener('click', mostrarMenu);
  document.getElementById('carritoNavbar').addEventListener('click',
      mostrarCarrito);
  document.getElementById('historialNavbar').addEventListener('click',
      mostrarHistorial);
  // Botones del menu
  document.getElementById('m1').addEventListener('click', agregarM1);
  document.getElementById('m2').addEventListener('click', agregarM2);
  document.getElementById('m3').addEventListener('click', agregarM3);
  document.getElementById('m4').addEventListener('click', agregarM4);
  document.getElementById('m5').addEventListener('click', agregarM5);
  document.getElementById('realizarPedidoBtn').addEventListener('click',
      realizarPedido);
  document.getElementById('cancelarPedidoBtn').addEventListener('click',
      cancelarPedido);
}

// Navegación
const homePage = document.getElementById('homePage');
const menuPage = document.getElementById('menu');
const carritoPage = document.getElementById('carrito');
const historialPage = document.getElementById('historial');

function ocultarTodasLasSecciones() {
  homePage.style.display = 'none';
  menuPage.style.display = 'none';
  carritoPage.style.display = 'none';
  historialPage.style.display = 'none';
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
// Fin Navegación

// Menús
const ensalada = new Menu('Ensalada Crispy',
    'Ensalada de hojas verdes, tomátes y pollo rebosado', 200);
const hamburguesa = new Menu('Hamburguesa',
    'Hamburguesa con lechuga, tomáte, queso y cebolla', 230);
const sandwich = new Menu('Sandwich',
    'Sandwich de jamón, queso, tomáte y lechuga', 200);
const spaghetti = new Menu('Spaghetti',
    'Spaghetti con salsa de tomate', 250);
const empanadas = new Menu('Empanadas',
    'Empanadas de carne, capresse y verduras', 180);
// Fin Menús

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
  alert('¡Tu menú ha sido agregado al carrito correctamente!');
  menuAPedido(ensalada.nombre, ensalada.precio);
}

function agregarM2() {
  agregarEnCarrito(hamburguesa.nombre, hamburguesa.descripcion,
      hamburguesa.precio);
  precioTotal(hamburguesa.precio);
  alert('¡Tu menú ha sido agregado al carrito correctamente!');
  menuAPedido(hamburguesa.nombre, hamburguesa.precio);
}

function agregarM3() {
  agregarEnCarrito(sandwich.nombre, sandwich.descripcion, sandwich.precio);
  precioTotal(sandwich.precio);
  alert('¡Tu menú ha sido agregado al carrito correctamente!');
  menuAPedido(sandwich.nombre, sandwich.precio);
}

function agregarM4() {
  agregarEnCarrito(spaghetti.nombre, spaghetti.descripcion, spaghetti.precio);
  precioTotal(spaghetti.precio);
  alert('¡Tu menú ha sido agregado al carrito correctamente!');
  menuAPedido(spaghetti.nombre, spaghetti.precio);
}

function agregarM5() {
  agregarEnCarrito(empanadas.nombre, empanadas.descripcion, empanadas.precio);
  precioTotal(empanadas.precio);
  alert('¡Tu menú ha sido agregado al carrito correctamente!');
  menuAPedido(empanadas.nombre, empanadas.precio);
}

let totalActual = 0;
function precioTotal(precioMenu) {
  totalActual += precioMenu;
  document.getElementById('precioTotal').textContent = totalActual;
}

function limpiarTablaCarrito() {
  const tabla = document.getElementById('carritoTabla');
  document.getElementById('precioTotal').textContent = 0;
  totalActual = 0;
  tabla.innerHTML = '';
}

function cancelarPedido() {
  limpiarTablaCarrito();
  limpiarListas();
}
// Fin Tabla Carrito

// Pedidos
const pedidoDescripcion = [];
const pedidoCosto = [];

function limpiarListas() {
  while (pedidoDescripcion.length > 0) {
    pedidoDescripcion.pop();
    pedidoCosto.pop();
  }
}

function menuAPedido(descr, costo) {
  pedidoDescripcion.push(descr);
  pedidoCosto.push(costo);
}

function obtengoPedidoDescr() {
  const descrPed = pedidoDescripcion.join(', ');
  return descrPed;
}

function obtengoPedidoCosto() {
  let total = 0;
  for (let i = 0; i < pedidoCosto.length; i++) {
    total += pedidoCosto[i];
  }
  return total;
}

function codigoRdm() {
  let codigo = '';
  const caracteres = '0123456789';
  const caracteresLong = caracteres.length;
  let contador = 0;
  while (contador < 5) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteresLong));
    contador += 1;
  }
  return codigo;
}

function fechaActual() {
  const fechaAct = new Date();
  const dia = fechaAct.getDate();
  const mes = fechaAct.getMonth() + 1;
  const año = fechaAct.getFullYear();
  const fechaRet = `${dia}/${mes}/${año}`;
  return fechaRet;
}

function realizarPedido() {
  if (pedidoDescripcion.length > 0) {
    const codigoPed = codigoRdm();
    const descrPed = obtengoPedidoDescr();
    const fechaPed = fechaActual();
    const costoPed = obtengoPedidoCosto();

    const pedidoNuevo = new Pedido(codigoPed, descrPed, fechaPed, costoPed);
    agregarEnHistorial(pedidoNuevo.codigo, pedidoNuevo.descripcion,
        pedidoNuevo.fecha, pedidoNuevo.costo);

    limpiarTablaCarrito();
    limpiarListas();

    alert('¡Su pedido ha sido realizado con éxito!');
  } else {
    alert('Pedido cancelado. ¡Tu carro está vacío!');
  }
}
// Fin Pedidos

// Tabla Historial
function agregarEnHistorial(codigoPed, descrPed, fechaPed, costoPed) {
  const carritoTabla = document.getElementById('historialTabla');
  const filaNueva = carritoTabla.insertRow();
  const codigoCell = filaNueva.insertCell();
  const descrCell = filaNueva.insertCell();
  const fechaCell = filaNueva.insertCell();
  const costoCell = filaNueva.insertCell();

  codigoCell.textContent = codigoPed;
  descrCell.textContent = descrPed;
  fechaCell.textContent = fechaPed;
  costoCell.textContent = costoPed;
}
// Fin Tabla Historial
