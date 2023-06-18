import {Pedido} from '../src/domain/pedido.js';

const p1 = new Pedido('01234', 'Menu 1', '18/06/2023', 200);

describe('Pedido', () => {
  describe('Get Codigo', () => {
    test('Debe devolver el código del pedido', () => {
      expect(p1.getCodigo()).toEqual('01234');
    });
  });

  describe('Set Codigo', () => {
    test('Debe introducir un código al pedido', () => {
      expect(p1.getCodigo()).toEqual('01234');
    });
  });

  describe('Descripcion', () => {
    test('Debe devolver la descripcion del menu', () => {
      expect(spaghetti.getDescripcion())
          .toEqual('Spaghetti con salsa de tomate');
    });
  });

  describe('Fecha', () => {
    test('Debe devolver el preecio del menu', () => {
      expect(spaghetti.getPrecio()).toBe(250);
    });
  });

  describe('Costo', () => {
    test('Debe devolver el preecio del menu', () => {
      expect(spaghetti.getPrecio()).toBe(250);
    });
  });
});
