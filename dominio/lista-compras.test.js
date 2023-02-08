import ListaCompras from "./lista-compras.mjs";
import Fruta from "./fruta.mjs";
import Verdura from "./verdura.mjs";

test("Crear lista de compras, ok", () => {
  const listaCompras = new ListaCompras();
  const miLista = listaCompras.getAlimentos();
  expect(miLista.length).toBe(0);
});

test("Agregar a una lista 1 fruta, ok", () => {
  const manzana = new Fruta("Manzana");
  const listaCompras = new ListaCompras();
  listaCompras.agregar(manzana);
  const miLista = listaCompras.getAlimentos();
  expect(miLista.length).toBe(1);
});

test("Agregar a una lista 1 verdura, ok", () => {
  const tomate = new Fruta("Tomate");
  const listaCompras = new ListaCompras();
  listaCompras.agregar(tomate);
  const miLista = listaCompras.getAlimentos();
  expect(miLista.length).toBe(1);
});

test("Agregar a una lista 2 frutas, ok", () => {
  const manzana = new Fruta("Manzana");
  const uva = new Fruta("Uva");
  const listaCompras = new ListaCompras();
  listaCompras.agregar(manzana);
  listaCompras.agregar(uva);
  const miLista = listaCompras.getAlimentos();
  expect(miLista.length).toBe(2);
});

test("Agregar a una lista 2 verduras, ok", () => {
  const tomate = new Verdura("Tomate");
  const lechuga = new Verdura("Lechuga");
  const listaCompras = new ListaCompras();
  listaCompras.agregar(tomate);
  listaCompras.agregar(lechuga);
  const miLista = listaCompras.getAlimentos();
  expect(miLista.length).toBe(2);
});

test("Agregar a una lista 1 verdura y 1 fruta, ok", () => {
  const tomate = new Verdura("Tomate");
  const manzana = new Fruta("Manzana");
  const listaCompras = new ListaCompras();
  listaCompras.agregar(tomate);
  listaCompras.agregar(manzana);
  const miLista = listaCompras.getAlimentos();
  expect(miLista.length).toBe(2);
});

test("Agregar una fruta 2 veces, ok", () => {
  const manzana = new Fruta("Manzana");
  const listaCompras = new ListaCompras();
  listaCompras.agregar(manzana);
  // eslint-disable-next-line max-len
  expect(() => listaCompras.agregar(manzana)).toThrow("No se pudo agregar. Manzana ya se encuentra en la lista.");
});

test("Eliminar un alimento, ok", () => {
  const tomate = new Verdura("Tomate");
  const manzana = new Fruta("Manzana");
  const listaCompras = new ListaCompras();
  listaCompras.agregar(tomate);
  listaCompras.agregar(manzana);
  listaCompras.eliminarAlimento(1);
  const miLista = listaCompras.getAlimentos();
  expect(miLista.length).toBe(1);
});