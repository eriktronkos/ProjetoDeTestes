/**
 * Represents the matrix problem.
 * @param {number} n - number of lines.
 * @param {number} m - number of columns.
 * @param {Array<Array>} matriz - Matrix.
 */
function matriz_escada_3(n, m, matriz) {

    var direita = m - 1;
    for (var j = 0; j < m; j++) {
        if (matriz[0][j] != 0) {
            direita = j - 1;
            break;
        }
    }

    for (var i = 0; i < n; i++) {
        for (var k = 0; k < direita; k++) {
            if (matriz[i][j] != 0)
                return 'N';
        }

        if (direita == m - 1)
            continue;

        direita = direita + 1;
        if (matriz[i][direita] != 0)
            return 'N';

        var zero = true;
        while (zero && direita < m - 1) {
            direita = direita + 1;
            if (matriz[i][direita] != 0)
                zero = false;
        }
    }
    return 'S';
}

module.exports = matriz_escada_3;