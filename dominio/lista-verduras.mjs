export default class ListaVerduras {
  constructor() {
    this.verduras = [];
  }

  agregar(verdura) {
    // eslint-disable-next-line max-len
    const verduraEnLista = this.verduras.some((m) => m.nombre == verdura.nombre);
    if (verdura.nombre == "") {
      throw new Error("No se pudo agregar. No tiene nombre.");
    } else {
      if (!verduraEnLista) {
        this.verduras.push(verdura);
      } else {
        // eslint-disable-next-line max-len
        throw new Error(`No se pudo agregar. ${verdura.nombre} ya se encuentra en la lista.`);
      }
    }
  }

  getVerduras() {
    return this.verduras;
  }
}