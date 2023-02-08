const MIN_CANT = 0;

export default class Fruta {
  constructor(nombre) {
    this.nombre = nombre;
    this.cantidad = 0;
  }

  setCantidad(cantidad) {
    if (cantidad >= MIN_CANT) {
      this.cantidad = cantidad;
    } else {
      // eslint-disable-next-line max-len
      throw new Error("La cantidad ingresada es incorrecta. No puede haber cantidad negativa");
    }
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getNombre() {
    return this.nombre;
  }

  getCantidad() {
    return this.cantidad;
  }

  aumentarCantidad() {
    this.cantidad++;
  }

  disminuirCantidad() {
    if (this.cantidad > 0) {
      this.cantidad--;
    } else {
      // eslint-disable-next-line max-len
      throw new Error("La cantidad ingresada es incorrecta. No puede haber cantidad negativa");
    }
  }
}