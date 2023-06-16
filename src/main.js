import { Menu } from "./domain/menu";

window.addEventListener("load", inicio);


function inicio() {
  document.getElementById("navBar");
  document.getElementById("homePageShowcase");
  document.getElementById("homePageButtons");
  document.getElementById("menuPageSection");
  document.getElementById("hpMenuBtn").addEventListener("click", mostrarMenu);
  //document.getElementById("hpCarritoBtn");
  //document.getElementById("hpHistorialBtn");
  document.getElementById("toHomePage").addEventListener("click", mostrarHomePage);
}

const homePage = document.getElementById("homePage");
const menuPage = document.getElementById("menuPage");



function mostrarHomePage() {
  ocultarTodasLasSecciones();
  homePage.style.display = 'block';
}

function mostrarMenu() {
  ocultarTodasLasSecciones();
  menuPage.style.display = 'block';
}

/*
function mostrarCarrito() {
  ocultarTodasLasSecciones();
  document.getElementById('carrito').style.display = 'block';
}

function mostrarHistorial() {
  ocultarTodasLasSecciones();
  document.getElementById('historial').style.display = 'block';
}
*/

function ocultarTodasLasSecciones() {
  var secciones = document.getElementsByTagName('section');
  for (var i = 0; i < secciones.length; i++) {
    secciones[i].style.display = 'none';
  }
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