import {Menu} from '../src/domain/menu.js';

const menu = new Menu('Spaghetti',
    'Spaghetti con salsa de tomate', 250);

describe('Menu', () => {
  describe('Nombre', () => {
    test('Debe devolver el nombre del menu', () => {
      expect(menu.getNombre()).toEqual('Spaghetti');
    });
  });

  describe('Descripcion', () => {
    test('Debe devolver la descripcion del menu', () => {
      expect(menu.getDescripcion())
          .toEqual('Spaghetti con salsa de tomate');
    });
  });

  describe('Precio', () => {
    test('Debe devolver el preecio del menu', () => {
      expect(menu.getPrecio()).toBe(250);
    });
  });
});
