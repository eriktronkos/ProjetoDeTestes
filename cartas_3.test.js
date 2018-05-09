const cartas_3 = require('./cartas_3');

test('CT1', function () {
    expect(cartas_3([0,2,2,4,6])).toBe("E");
});

test('CT2', function () {
    expect(cartas_3([13,10,7,6,5])).toBe("D");
});

test('CT3', function () {
    expect(cartas_3([15,9,2,10,20])).toBe("E");
});