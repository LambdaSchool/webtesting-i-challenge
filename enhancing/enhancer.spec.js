const enhancer = require('./enhancer.js');
// test away!

describe('repair()', () => {
    it('returns durabilty to 100', () => {
      const item = {
        name: 'Gladius',
        type: 'sword',
        durability: 98
      };
      const repair = enhancer.repair(item);
      expect(repair.durability).toBe(100);
    });
  });
describe('success()', () => {
    it('Adds enhancement by +1', () => {
        const item = {
            enhancement: 16
        };
        const actual = enhancer.success(item);

        expect(actual.enhancement).toBe(17);
    });

    it('Enhancement above 19 does not get increased', () => {
        const item = {
            enhancement: 20
        };

        const actual = enhancer.success(item);

        expect(actual.enhancement).toBe(20);
    });
});