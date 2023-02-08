import Verdura from "./verdura.mjs";

test("Creación de una verdura, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  expect(unaVerdura.nombre).toBe("Tomate");
  expect(unaVerdura.cantidad).toBe(0);
});

test("Agregar 10 de cantidad a una verdura, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  expect(unaVerdura.nombre).toBe("Tomate");
  expect(unaVerdura.cantidad).toBe(0);
  unaVerdura.setCantidad(10);
  expect(unaVerdura.cantidad).toBe(10);
});

test("Agregar -10 de cantidad a una verdura, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  expect(unaVerdura.nombre).toBe("Tomate");
  expect(unaVerdura.cantidad).toBe(0);
  // eslint-disable-next-line max-len
  expect(() => unaVerdura.setCantidad(-10)).toThrow("La cantidad ingresada es incorrecta. No puede haber cantidad negativa");
});

test("Agregar nombre vacio, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  // eslint-disable-next-line max-len
  expect(() => unaVerdura.setNombre(null).toThrow("Debe ingresar un nombre"));
});

test("Agregar nombre, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  // eslint-disable-next-line max-len
  unaVerdura.setNombre("Lechuga");
  expect(unaVerdura.getNombre()).toBe("Lechuga");
});

test("Pedir nombre, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  expect(unaVerdura.getNombre()).toBe("Tomate");
});

test("Pedir cantidad, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  expect(unaVerdura.getCantidad()).toBe(0);
});

test("Aumentar cantidad, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  unaVerdura.aumentarCantidad();
  expect(unaVerdura.getCantidad()).toBe(1);
});

test("Disminuir cantidad, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  unaVerdura.aumentarCantidad();
  unaVerdura.disminuirCantidad();
  expect(unaVerdura.getCantidad()).toBe(0);
});

test("Disminuir cantidad menor a 0, ok", () => {
  const unaVerdura = new Verdura("Tomate");
  unaVerdura.setCantidad(0);
  // eslint-disable-next-line max-len
  expect(() => unaVerdura.disminuirCantidad()).toThrow("La cantidad ingresada es incorrecta. No puede haber cantidad negativa");
});