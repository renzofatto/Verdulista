import Fruta from "./fruta.mjs";

test("Creación de una fruta, ok", () => {
  const unaFruta = new Fruta("Manzana");
  expect(unaFruta.nombre).toBe("Manzana");
  expect(unaFruta.cantidad).toBe(0);
});

test("Agregar 10 de cantidad a una fruta, ok", () => {
  const unaFruta = new Fruta("Manzana");
  expect(unaFruta.nombre).toBe("Manzana");
  expect(unaFruta.cantidad).toBe(0);
  unaFruta.setCantidad(10);
  expect(unaFruta.cantidad).toBe(10);
});

test("Agregar -10 de cantidad a una fruta, ok", () => {
  const unaFruta = new Fruta("Manzana");
  expect(unaFruta.nombre).toBe("Manzana");
  expect(unaFruta.cantidad).toBe(0);
  // eslint-disable-next-line max-len
  expect(() => unaFruta.setCantidad(-10)).toThrow("La cantidad ingresada es incorrecta. No puede haber cantidad negativa");
});

test("Agregar nombre, ok", () => {
  const unaFruta = new Fruta("Manzana");
  unaFruta.setNombre("Naranja");
  expect(unaFruta.nombre).toBe("Naranja");
});

test("Obtener nombre, ok", () => {
  const unaFruta = new Fruta("Manzana");
  unaFruta.setNombre("Naranja");
  expect(unaFruta.getNombre()).toBe("Naranja");
});

test("Obtener cantidad, ok", () => {
  const unaFruta = new Fruta("Manzana");
  expect(unaFruta.getCantidad()).toBe(0);
});

test("Obtener cantidad, ok", () => {
  const unaFruta = new Fruta("Manzana");
  unaFruta.aumentarCantidad();
  expect(unaFruta.getCantidad()).toBe(1);
});

test("Obtener cantidad, ok", () => {
  const unaFruta = new Fruta("Manzana");
  unaFruta.aumentarCantidad();
  unaFruta.disminuirCantidad();
  expect(unaFruta.getCantidad()).toBe(0);
});

test("Disminuir cantidad menor a 0, ok", () => {
  const unaFruta = new Fruta("Frutilla");
  unaFruta.setCantidad(0);
  // eslint-disable-next-line max-len
  expect(() => unaFruta.disminuirCantidad()).toThrow("La cantidad ingresada es incorrecta. No puede haber cantidad negativa");
});