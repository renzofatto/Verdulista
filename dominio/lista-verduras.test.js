import ListaVerduras from "./lista-verduras.mjs";
import Verdura from "./verdura.mjs";

test("Crear lista de verduras, ok", () => {
  const listaVerduras = new ListaVerduras();
  const miLista = listaVerduras.getVerduras();
  expect(miLista.length).toBe(0);
});

test("Agregar a una lista de verduras 1 verdura, ok", () => {
  const tomate = new Verdura("Tomate");
  const listaVerduras = new ListaVerduras();
  listaVerduras.agregar(tomate);
  const miLista = listaVerduras.getVerduras();
  expect(miLista.length).toBe(1);
});

test("Agregar a una lista de verduras 2 verduras, ok", () => {
  const tomate = new Verdura("Tomate");
  const lechuga = new Verdura("Lechuga");
  const listaVerduras = new ListaVerduras();
  listaVerduras.agregar(tomate);
  listaVerduras.agregar(lechuga);
  const miLista = listaVerduras.getVerduras();
  expect(miLista.length).toBe(2);
});

test("Acceder a las verduras de una lista de verduras, ok", () => {
  const tomate = new Verdura("Tomate");
  const lechuga = new Verdura("Lechuga");
  const listaVerduras = new ListaVerduras();
  listaVerduras.agregar(tomate);
  listaVerduras.agregar(lechuga);
  const miLista = listaVerduras.getVerduras();
  expect(miLista[0].nombre).toBe("Tomate");
  expect(miLista[0].cantidad).toBe(0);
  expect(miLista[1].nombre).toBe("Lechuga");
  expect(miLista[1].cantidad).toBe(0);
});

test("Agregar una verdura 2 veces, ok", () => {
  const tomate = new Verdura("Tomate");
  const listaVerduras = new ListaVerduras();
  listaVerduras.agregar(tomate);
  // eslint-disable-next-line max-len
  expect(() => listaVerduras.agregar(tomate)).toThrow("No se pudo agregar. Tomate ya se encuentra en la lista.");
});

test("Agregar una verdura sin nombre, ok", () => {
  const tomate = new Verdura("");
  const listaVerduras = new ListaVerduras();
  // eslint-disable-next-line max-len
  expect(() => listaVerduras.agregar(tomate)).toThrow("No se pudo agregar. No tiene nombre.");
});