window.addEventListener("load", inicio);
 
function inicio() {
  document.getElementById("navBar").style.display = 'block';
  document.getElementById("homePage").style.display = 'block';

  document.getElementById("menu").style.display = "none";
  document.getElementById("carrito").style.display = "none";
  document.getElementById("historial").style.display = "none";

  document.getElementById("hpMenuBtn").addEventListener("click", mostrarMenu);
  document.getElementById("hpCarritoBtn").addEventListener("click", mostrarCarrito);
  document.getElementById("hpHistorialBtn").addEventListener("click", mostrarHistorial);
  document.getElementById("toHomePage").addEventListener("click", mostrarHomePage);
  document.getElementById("menuNavbar").addEventListener("click", mostrarMenu);
  document.getElementById("carritoNavbar").addEventListener("click", mostrarCarrito);
  document.getElementById("historialNavbar").addEventListener("click", mostrarHistorial);
  document.getElementById("m1").addEventListener("click", agregarM1);
  document.getElementById("m2").addEventListener("click", agregarM2);
  document.getElementById("m3").addEventListener("click", agregarM3);
  document.getElementById("m4").addEventListener("click", agregarM4);
  document.getElementById("m5").addEventListener("click", agregarM5);
}

const homePage = document.getElementById("homePage");
const menuPage = document.getElementById("menu");
const carritoPage = document.getElementById("carrito");
const historialPage = document.getElementById("historial");

const listaMenus = [{nombre: "Ensalada Crispy", descripcion: "Ensalada de hojas verdes, tomátes y pollo rebosado", precio: 200}, 
  {nombre: "Hamburguesa", descripcion: "Hamburguesa con lechuga, tomáte, queso y cebolla", precio: 230}, 
  {nombre: "Sandwich", descripcion: "Sandwich de jamón, queso, tomáte y lechuga", precio: 200}, 
  {nombre: "Spaghetti", descripcion: "Spaghetti con salsa de tomate", precio: 250},
  {nombre: "Empanadas", descripcion: "Empanadas de carne, capresse y verduras", precio: 180}
];

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
  agregarEnCarrito(listaMenus[0].nombre, listaMenus[0].descripcion, listaMenus[0].precio);
  precioTotal(listaMenus[0].precio);
}

function agregarM2() {
  agregarEnCarrito(listaMenus[1].nombre, listaMenus[1].descripcion, listaMenus[1].precio);
  precioTotal(listaMenus[1].precio);
}

function agregarM3() {
  agregarEnCarrito(listaMenus[2].nombre, listaMenus[2].descripcion, listaMenus[2].precio);
  precioTotal(listaMenus[2].precio);
}

function agregarM4() {
  agregarEnCarrito(listaMenus[3].nombre, listaMenus[3].descripcion, listaMenus[3].precio);
  precioTotal(listaMenus[3].precio);
}

function agregarM5() {
  agregarEnCarrito(listaMenus[4].nombre, listaMenus[4].descripcion, listaMenus[4].precio);
  precioTotal(listaMenus[4].precio);
}

var totalActual = 0;
function precioTotal(precioMenu) {
  totalActual += precioMenu;
  document.getElementById("precioTotal").textContent = totalActual;
}
// Fin
