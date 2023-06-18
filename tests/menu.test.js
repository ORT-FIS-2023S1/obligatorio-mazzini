import {Menu} from '../src/domain/menu.js';

const spaghetti = new Menu('Spaghetti',
    'Spaghetti con salsa de tomate', 250);

describe('Menu', () => {
  describe('Nombre', () => {
    test('Debe devolver el nombre del menu', () => {
      expect(spaghetti.getNombre()).toEqual('Spaghetti');
    });
  });

  describe('Descripcion', () => {
    test('Debe devolver la descripcion del menu', () => {
      expect(spaghetti.getDescripcion())
          .toEqual('Spaghetti con salsa de tomate');
    });
  });

  describe('Precio', () => {
    test('Debe devolver el preecio del menu', () => {
      expect(spaghetti.getPrecio()).toBe(250);
    });
  });
});
