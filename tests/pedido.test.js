import {Pedido} from '../src/domain/pedido.js';

let pedido;

describe('Pedido', () => {
  beforeEach(() => {
    pedido = new Pedido('01234', 'Menu 1', '18/06/2023', 200);
  });

  describe('Get Codigo', () => {
    test('Debe devolver el código del pedido', () => {
      expect(pedido.getCodigo()).toEqual('01234');
    });
  });

  describe('Descripcion', () => {
    test('Debe devolver la descripcion del pedido', () => {
      expect(pedido.getDescripcion()).toEqual('Menu 1');
    });
  });

  describe('Fecha', () => {
    test('Debe devolver la fecha del pedido', () => {
      expect(pedido.getFecha()).toEqual('18/06/2023');
    });
  });

  describe('Costo', () => {
    test('Debe devolver el costo del pedido', () => {
      expect(pedido.getCosto()).toBe(200);
    });
  });
});
