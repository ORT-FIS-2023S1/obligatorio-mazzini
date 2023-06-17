// import { Menu } from "./domain/menu";

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
}

const homePage = document.getElementById("homePage");
const menuPage = document.getElementById("menu");
const carritoPage = document.getElementById("carrito");
const historialPage = document.getElementById("historial");

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



/*
import { Country } from "./domain/country.js";
import { CountryList } from "./domain/countrylist.js";

const btnAdd = document.getElementById('btn_add');
const inpName = document.getElementById('inp_name');
const inpCapital = document.getElementById('inp_capital');

const mainCountryList = new CountryList();

btnAdd.addEventListener('click', () => {
  const newCountry = new Country(inpName.value);
  newCountry.setCapital(inpCapital.value);
  mainCountryList.add(newCountry);
  console.log(newCountry.presentar());
  loadCountryList();
} );

function loadCountryList(){
  const countries = mainCountryList.getCountries();
  let seccountries = document.getElementById('seccountries');
  
  for(let i = 0; i < countries.length; i++) {
    let country = countries[i];

    let infocountry = document.createElement("div")
    infocountry.className = "infocountry";
    infocountry.innerHTML = country.presentar();
    seccountries.appendChild(infocountry);

    let saltoLinea = document.createElement('br');
    seccountries.appendChild(saltoLinea);

  }
}
*/