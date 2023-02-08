export default class ListaFrutas {
  constructor() {
    this.frutas = [];
  }

  agregar(fruta) {
    const frutaEnLista = this.frutas.some((m) => m.nombre == fruta.nombre);
    if (fruta.nombre == "") {
      throw new Error("No se pudo agregar, el texto esta vacio.");
    } else {
      if (!frutaEnLista) {
        this.frutas.push(fruta);
      } else {
        // eslint-disable-next-line max-len
        throw new Error(`No se pudo agregar. ${fruta.nombre} ya se encuentra en la lista.`);
      }
    }
  }

  getFrutas() {
    return this.frutas;
  }
}