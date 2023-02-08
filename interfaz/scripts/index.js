import { MDCRipple } from '@material/ripple';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import ListaFrutas from '../../dominio/lista-frutas.mjs';
import ListaVerduras from '../../dominio/lista-verduras.mjs';
import ListaCompras from '../../dominio/lista-compras.mjs';
import Verdura from '../../dominio/verdura.mjs';
import Fruta from '../../dominio/fruta.mjs';

//BARRA
const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
//Movimiento entre pestañas
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});


//  FRUTAS
//Se van a guardar las Frutas en esta lista
const listaFrutas = new ListaFrutas();
//Agregan frutas precargadas
const manzana = new Fruta("Manzana");
listaFrutas.agregar(manzana);
const frutilla = new Fruta("Frutilla");
listaFrutas.agregar(frutilla);
const banana = new Fruta("Banana");
listaFrutas.agregar(banana);
const kiwi = new Fruta("Kiwi");
listaFrutas.agregar(kiwi);
//Cargar lista Frutas
function cargarListaFrutas() {
  for (let i = 0; i < listaFrutas.getFrutas().length; i++) {
    let frutas = listaFrutas.getFrutas();
    let fru = frutas[i];
    //Crear ul
    let ul = document.getElementById("idListaFruta");
    ul.className = "mdc-list";
    //Crear li
    let li = document.createElement("li");
    li.className = "mdc-list-item";
    //Creo div
    let div = document.createElement("div");
    div.className = "mdc-image-list__image-aspect-container";
    //Crear Boton Mas
    let btnMas = document.createElement("button");
    
    btnMas.className = "mdc-button mdc-button--raised mdc-theme--secondary-bg claseBtnSuma";
    btnMas.id = "idBtnMas" + fru.nombre;
    btnMas.onclick = () => sumar(fru); // escucha onclick le agregamos ver y llamamos a la funcion y ver le pasa por parametro fruta
    //Crear spanMas
    let spanMas = document.createElement("SPAN");
    spanMas.className = "mdc-fab__icon material-icons";
    spanMas.textContent = "add";
    //agregar span a boton1
    btnMas.appendChild(spanMas);
    //Crear Boton Resta
    let btnResta = document.createElement("button");
    btnResta.className = "mdc-button mdc-button--raised claseBtnResta";
    btnResta.id = "idBtnResta" + fru.nombre;
    btnResta.onclick = () => restar(fru);
    //Crear spanMenos
    let spanMenos = document.createElement("SPAN");
    spanMenos.className = "mdc-fab__icon material-icons";
    spanMenos.textContent = "remove";
    //agregar spanMenos a boton2
    btnResta.appendChild(spanMenos);
    //Agrega btnResta a li
    li.appendChild(btnResta);
    //Crear textoNombre
    let textNombre = document.createTextNode(fru.nombre);
    textNombre.className = "claseTextoNombre";
    //Agrega textNombre a li
    li.appendChild(textNombre);
    //Agrefa BotonMas a li
    li.appendChild(btnMas);
    //Crea texto Cantidad
    let prueba = document.createElement("div");
    prueba.className = "mdc-image-list__image-aspect-container";
    prueba.id="idCantidad"+fru.nombre;
    //Agrega textoCantidad a li
    li.appendChild(prueba);
    //Agrega btnMas a li
    li.appendChild(btnMas);
    //Agregar li al ul
    ul.appendChild(li);
  }
}
//Ejecuta la funcion al cargar la pagina
cargarListaFrutas();
//Textfield donde se pone el nombre de la fruta
const textFieldNombreFruta = new MDCTextField(document.getElementById('idNombreFrutaAdd'));
//Boton Agregar fruta
const addButtonFruta = new MDCRipple(document.getElementById('idBtnAgregarFruta'));
//Agregar nueva fruta
addButtonFruta.listen('click', () => {
  let nombre = textFieldNombreFruta.value;
  try {
    let newFruta = new Fruta(nombre);
    listaFrutas.agregar(newFruta);
    alert("Se agrego " + nombre + " a la lista!");
    //Crear ul
    let ul = document.getElementById("idListaFruta");
    ul.className = "mdc-list";
    //Crear li
    let li = document.createElement("li");
    li.className = "mdc-list-item";
    //Creo div
    let div = document.createElement("div");
    div.className = "mdc-image-list__image-aspect-container";
    //Crear Boton Mas
    let btnMas = document.createElement("button");
    btnMas.className = "mdc-button mdc-button--raised claseBtnSuma";
    btnMas.id = "idBtnMas" + nombre;
    btnMas.onclick = () => sumar(newFruta);
    //Crear spanMas
    let spanMas = document.createElement("SPAN");
    spanMas.className = "mdc-fab__icon material-icons";
    spanMas.textContent = "add";
    //agregar span a boton1
    btnMas.appendChild(spanMas);
    //Crear Boton Resta
    let btnResta = document.createElement("button");
    btnResta.className = "mdc-button mdc-button--raised claseBtnResta";
    btnResta.id = "idBtnResta" + nombre;
    btnResta.onclick = () => restar(newFruta);
    //Crear spanMenos
    let spanMenos = document.createElement("SPAN");
    spanMenos.className = "mdc-fab__icon material-icons";
    spanMenos.textContent = "remove";
    //agregar spanMenos a boton2
    btnResta.appendChild(spanMenos);
    //Agrega btnResta a li
    li.appendChild(btnResta);
    //Crear textoNombre
    let textNombre = document.createTextNode(nombre);
    textNombre.className = "claseTextoNombre";
    //Agrega textNombre a li
    li.appendChild(textNombre);
    //Agrefa BotonMas a li
    li.appendChild(btnMas);
    //Crea texto Cantidad
    let prueba = document.createElement("div");
    prueba.className = "mdc-image-list__image-aspect-container";
    prueba.id="idCantidad"+nombre;
    //Agrega textoCantidad a li
    li.appendChild(prueba);
    //Agrega btnMas a li
    li.appendChild(btnMas);
    //Agregar li al ul
    ul.appendChild(li);
  } catch (error) {
    alert(error.message);
  }
})


//  VERDURAS
//Se van a guardar las Verduras en esta lista
const listaVerduras = new ListaVerduras();
//Agregan verduras precargadas
const lechuga = new Verdura("Lechuga");
listaVerduras.agregar(lechuga);
const tomate = new Verdura("Tomate");
listaVerduras.agregar(tomate);
const acelga = new Verdura("Acelga");
listaVerduras.agregar(acelga);
const remolacha = new Verdura("Remolacha");
listaVerduras.agregar(remolacha);
//Cargar lista Verduras
function cargarListaVerduras() {
  for (let i = 0; i < listaVerduras.getVerduras().length; i++) {
    let verduras = listaVerduras.getVerduras();
    let ver = verduras[i];
    //Crear ul
    let ul = document.getElementById("idListaVerduras");
    ul.className = "mdc-list";
    //Crear li
    let li = document.createElement("li");
    li.className = "mdc-list-item";
    //Creo div
    let div = document.createElement("div");
    div.className = "mdc-image-list__image-aspect-container";
    //Crear Boton Mas
    let btnMas = document.createElement("button");
    btnMas.className = "mdc-button mdc-button--raised claseBtnSuma";
    btnMas.id = "idBtnMas" + ver.nombre;
    btnMas.onclick = () => sumar(ver); // escuchador onclick le agregamos ver y llamamos a la funcion y ver le pasa por parametro verdrura
    //Crear spanMas
    let spanMas = document.createElement("SPAN");
    spanMas.className = "mdc-fab__icon material-icons";
    spanMas.textContent = "add";
    //agregar span a boton1
    btnMas.appendChild(spanMas);
    //Crear Boton Resta
    let btnResta = document.createElement("button");
    btnResta.className = "mdc-button mdc-button--raised claseBtnResta";
    btnResta.id = "idBtnResta" + ver.nombre;
    btnResta.onclick = () => restar(ver);
    //Crear spanMenos
    let spanMenos = document.createElement("SPAN");
    spanMenos.className = "mdc-fab__icon material-icons";
    spanMenos.textContent = "remove";
    //agregar spanMenos a boton2
    btnResta.appendChild(spanMenos);
    //Agrega btnResta a li
    li.appendChild(btnResta);
    //Crear textoNombre
    let textNombre = document.createTextNode(ver.nombre);
    textNombre.className = "claseTextoNombre";
    //Agrega textNombre a li
    li.appendChild(textNombre);
    //Agrefa BotonMas a li
    li.appendChild(btnMas);
    //Crea texto Cantidad
    let prueba = document.createElement("div");
    prueba.className = "mdc-image-list__image-aspect-container";
    prueba.id="idCantidad"+ver.nombre;
    //Agrega textoCantidad a li
    li.appendChild(prueba);
    //Agrega btnMas a li
    li.appendChild(btnMas);
    //Agregar li al ul
    ul.appendChild(li);
  }

}
//Ejecuta la funcion al cargar la pagina
cargarListaVerduras();
//Textfield donde se pone el nombre de la verdura
const textFieldNombreVerdura = new MDCTextField(document.getElementById('idNombreVerduraAdd'));
//Boton Agregar verdura
const addButtonVerdura = new MDCRipple(document.getElementById('idBtnAgregarVerdura'));
//Boton borrar lista
const buttonBorrar = new MDCRipple(document.getElementById('idBtnBorrar'));
//Agregar nueva verdura
addButtonVerdura.listen('click', () => {
  let nombre = textFieldNombreVerdura.value;
  try {
    let newVerdura = new Verdura(nombre);
    listaVerduras.agregar(newVerdura);
    alert("Se agrego " + nombre + " a la lista!");
    //Crear ul
    let ul = document.getElementById("idListaVerduras");
    ul.className = "mdc-list";
    //Crear li
    let li = document.createElement("li");
    li.className = "mdc-list-item";
    //Creo div
    let div = document.createElement("div");
    div.className = "mdc-image-list__image-aspect-container";
    //Crear Boton Mas
    let btnMas = document.createElement("button");
    btnMas.className = "mdc-button mdc-button--raised claseBtnSuma";
    btnMas.id = "idBtnMas" + nombre;
    btnMas.onclick = () => sumar(newVerdura);
    //Crear spanMas
    let spanMas = document.createElement("SPAN");
    spanMas.className = "mdc-fab__icon material-icons";
    spanMas.textContent = "add";
    //agregar span a boton1
    btnMas.appendChild(spanMas);
    //Crear Boton Resta
    let btnResta = document.createElement("button");
    btnResta.className = "mdc-button mdc-button--raised claseBtnResta";
    btnResta.id = "idBtnResta" + nombre;
    btnResta.onclick = () => restar(newVerdura);
    //Crear spanMenos
    let spanMenos = document.createElement("SPAN");
    spanMenos.className = "mdc-fab__icon material-icons";
    spanMenos.textContent = "remove";
    //agregar spanMenos a boton2
    btnResta.appendChild(spanMenos);
    //Agrega btnResta a li
    li.appendChild(btnResta);
    //Crear textoNombre
    let textNombre = document.createTextNode(nombre);
    textNombre.className = "claseTextoNombre";
    //Agrega textNombre a li
    li.appendChild(textNombre);
    //Agrefa BotonMas a li
    li.appendChild(btnMas);
    //Crea texto Cantidad
    let prueba = document.createElement("div");
    prueba.className = "mdc-image-list__image-aspect-container";
    prueba.id="idCantidad"+nombre;
    //Agrega textoCantidad a li
    li.appendChild(prueba);
    //Agrega btnMas a li
    li.appendChild(btnMas);
    //Agregar li al ul
    ul.appendChild(li);
  } catch (error) {
    alert(error.message);
  }
})


//  ALIMENTOS
//Se van a guardar los alimentos seleccionados para comprar en esta lista
const listaCompras = new ListaCompras();
//Cargar lista de alimentos
function cargarAlimentos(){
  for (let i = 0; i < listaFrutas.getFrutas().length; i++) {
    let fruta = listaFrutas.getFrutas();
    let fru = fruta[i];
    if (fru.getCantidad()>0){
      try{
      listaCompras.agregar(fru);
      }catch{
      }
    }
  }
  for (let i = 0; i < listaVerduras.getVerduras().length; i++) {
    let verdura = listaVerduras.getVerduras();
    let ver = verdura[i];
    if (ver.getCantidad()>0){
      try{
      listaCompras.agregar(ver);
      }catch{
      }
    }
  }
}
//Cargar a la lista de compras los alimentos
function cargarListaCompras() {
  cargarAlimentos();
  let ul = document.getElementById("idListaCompras");
  ul.className = "mdc-list";
  ul.innerHTML = "";
  //Copiamos la lista de compras
  let alimentos = listaCompras.getAlimentos();
  for (let i = 0; i < listaCompras.getAlimentos().length; i++) {
    //Nos quedamos con el elemento
    let ali = alimentos[i];
    //Crear li
    let li = document.createElement("li");
    li.className = "mdc-list-item";
    //Creo div
    let div = document.createElement("div");
    div.className = "mdc-image-list__image-aspect-container";
    //Crear textoNombre
    let textNombre = document.createTextNode(ali.nombre+" "+ali.getCantidad()+ " kg.");
    textNombre.className = "claseTextoNombre";
    //Agrega textNombre a li
    li.appendChild(textNombre);;
    //Crea texto Cantidad
    let prueba = document.createElement("divEnLista");
    prueba.className = "mdc-image-list__image-aspect-container";
    prueba.id="idCantidadEnLista"+ali.nombre;
    //Agrega textoCantidad a li
    li.appendChild(prueba);
    //Agregar li al ul
    ul.appendChild(li);
  }
}
//Borrar la lista
buttonBorrar.listen('click', () => {
  if (listaCompras.getAlimentos().length == 0){
    alert("No hay alimentos en la lista de compras");
  }else{
    while (listaCompras.getAlimentos().length>0){
      let listita = listaCompras.getAlimentos();
      listita.pop();
    }
    cargarCantidadAlimentosCero();
    var ul = document.getElementById("idListaVerduras");
    ul.className = "mdc-list";
    ul.innerHTML = "";
    cargarListaVerduras();
    var ul = document.getElementById("idListaFruta");
    ul.className = "mdc-list";
    ul.innerHTML = "";
    cargarListaFrutas();
    var ul = document.getElementById("idListaCompras");
    ul.className = "mdc-list";
    ul.innerHTML = "";
  }
})
//Setea la cantidad de frutas y verduras a 0
function cargarCantidadAlimentosCero(){
  for (let i = 0; i < listaFrutas.getFrutas().length; i++) {
    let fruta = listaFrutas.getFrutas();
    fruta[i].setCantidad(0);
  }
  for (let i = 0; i < listaVerduras.getVerduras().length; i++) {
    let verdura = listaVerduras.getVerduras();
    verdura = verdura[i].setCantidad(0);
  }
}

//FUNCIONES AUXILIARES
//Funcion sumar
function sumar(alimento) {
  //Aumenta cantidad del alimento
  alimento.aumentarCantidad();
  let nombre = alimento.getNombre();
  //Agarramos donde esta el nombre y le agregamos la cantidad actualizada
  document.getElementById("idCantidad"+nombre).textContent = " - "+alimento.getCantidad()+" kg.";
  //Se carga a la lista de compras
  cargarListaCompras();  
}
//Funcion restar
function restar(alimento) {
  try {
    //Se le resta la cantidad al alimento
    alimento.disminuirCantidad();
    let nombre = alimento.getNombre();
    //En caso que la cantidad quede en 0
    if (alimento.getCantidad()==0){
      //Se vacia el contenido de la cantidad en el html
      document.getElementById("idCantidad"+nombre).textContent = "";
      let pos = 0;
      //Recorre la listaCompras para buscar la posicion del alimento que tiene cantidad 0
      let listita = listaCompras.getAlimentos();
      for (let i=0; i <listita.length; i++){
        let aux = listita[i];
        if (aux.nombre == alimento.getNombre()){
          pos = i;
        }
      }
      //Salidos del for se elimina el alimento en la posicion encontrada
      listaCompras.eliminarAlimento(pos);
    }else{
      //Si la cantidad no es 0 se refleja la cantidad disminuida
      document.getElementById("idCantidad"+nombre).textContent = " - "+alimento.getCantidad()+"kg.";
    }
  } catch (error) {
    //El posible error es que no se pueda disminuir menos que 0
    alert(error.message);
  } finally{
    //Por ultimo se carga la lista de compras
    cargarListaCompras();
  }
}

