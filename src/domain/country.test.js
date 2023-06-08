import {Country} from './country.js';

test('country name Uruguay', () => {
  const aCountry = new Country('Uruguay');
  expect(aCountry.getNombre()).toBe('Uruguay');
});
