/* eslint-disable eol-last */
import ListaFrutas from "./lista-frutas.mjs";
import Fruta from "./fruta.mjs";

test("Crear lista de frutas, ok", () => {
  const listaFrutas = new ListaFrutas();
  const miLista = listaFrutas.getFrutas();
  expect(miLista.length).toBe(0);
});

test("Agregar a una lista de frutas 1 fruta, ok", () => {
  const manzana = new Fruta("Manzana");
  const listaFrutas = new ListaFrutas();
  listaFrutas.agregar(manzana);
  const miLista = listaFrutas.getFrutas();
  expect(miLista.length).toBe(1);
});

test("Agregar a una lista de frutas 2 frutas, ok", () => {
  const manzana = new Fruta("Manzana");
  const uva = new Fruta("Uva");
  const listaFrutas = new ListaFrutas();
  listaFrutas.agregar(manzana);
  listaFrutas.agregar(uva);
  const miLista = listaFrutas.getFrutas();
  expect(miLista.length).toBe(2);
});

test("Acceder a las frutas de una lista de frutas, ok", () => {
  const manzana = new Fruta("Manzana");
  const uva = new Fruta("Uva");
  const listaFrutas = new ListaFrutas();
  listaFrutas.agregar(manzana);
  listaFrutas.agregar(uva);
  const miLista = listaFrutas.getFrutas();
  expect(miLista[0].nombre).toBe("Manzana");
  expect(miLista[0].cantidad).toBe(0);
  expect(miLista[1].nombre).toBe("Uva");
  expect(miLista[1].cantidad).toBe(0);
});

test("Agregar una fruta 2 veces, ok", () => {
  const manzana = new Fruta("Manzana");
  const listaFrutas = new ListaFrutas();
  listaFrutas.agregar(manzana);
  // eslint-disable-next-line max-len
  expect(() => listaFrutas.agregar(manzana)).toThrow("No se pudo agregar. Manzana ya se encuentra en la lista.");
});

test("Agregar una fruta sin nombre, ok", () => {
  const manzana = new Fruta("");
  const listaFrutas = new ListaFrutas();
  // eslint-disable-next-line max-len
  expect(() => listaFrutas.agregar(manzana)).toThrow("No se pudo agregar, el texto esta vacio.");
});
