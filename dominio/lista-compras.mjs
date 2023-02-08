export default class ListaCompras {
  constructor() {
    this.alimentos = [];
  }

  agregar(alimento) {
    // eslint-disable-next-line max-len
    const alimentoEnLista = this.alimentos.some((m) => m.nombre == alimento.nombre);
    if (!alimentoEnLista) {
      this.alimentos.push(alimento);
    } else {
      // eslint-disable-next-line max-len
      throw new Error(`No se pudo agregar. ${alimento.nombre} ya se encuentra en la lista.`);
    }
  }

  getAlimentos() {
    return this.alimentos;
  }

  eliminarAlimento(pos) {
    this.alimentos.splice(pos, 1);
  }
}