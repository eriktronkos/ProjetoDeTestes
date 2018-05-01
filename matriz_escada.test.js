const matriz_escada = require('./matriz_escada');

test('CT1', function () {
    expect(matriz_escada(3,3,[[1,2,3],[0,4,2],[0,0,1]])).toBe("S");
});

test('CT2', function () {
    expect(matriz_escada(2,2,[[1,2,3],[0,-4,2],[1,1,1]])).toBe("N");
});

test('CT3', function () {
    expect(matriz_escada(2,2,[[1,100000000,3],[0,2,2],[1,1,1]])).toBe("N");
});

test('CT4', function () {
    expect(matriz_escada(2,3,[[1,-5,3],[0,2,2],[1,1,1]])).toBe("N");
});

test('CT5', function () {
    expect(matriz_escada(2,3,[[1,100000000,3],[0,2,2],[1,1,1]])).toBe("N");
});

test('CT6', function () {
    expect(matriz_escada(2,2,[[1,6],[2,2]])).toBe("N");
});

test('CT7', function () {
    expect(matriz_escada(2,2,[[1,100000],[0,2]])).toBe("S");
});

test('CT8', function () {
    expect(matriz_escada(3,2,[[1,6],[0,2],[0,0]])).toBe("S");
});

test('CT9', function () {
    expect(matriz_escada(2,3,[[1,6,2],[0,0,0]])).toBe("S");
});