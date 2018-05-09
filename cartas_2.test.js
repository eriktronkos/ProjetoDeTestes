const cartas_2 = require('./cartas_2');

test('CT1', function () {
    expect(cartas_2([0,2,2,4,6])).toBe("E");
});

test('CT2', function () {
    expect(cartas_2([13,10,7,6,5])).toBe("D");
});

test('CT3', function () {
    expect(cartas_2([15,9,2,10,20])).toBe("E");
});