/**
 * Represents the matrix problem.
 * @param {number} n - number of lines.
 * @param {number} m - number of columns.
 * @param {Array<Array>} matriz - Matrix.
 */
function matriz_escada_2(n, m, matriz) {

    var direita = m - 1;
    for (var i = 0; i < n; i++){
        for (var j = 0; j < direita; j++){
            if (matriz[i][j] != 0)
                return "N";
        }

        if (direita == m-1){
            continue;
        }

        direita += 1;
        if (matriz[i][direita] != 0)
            return 'N';
        var zero = true;
        while (zero && direita < M-1){
            direita += 1;
            if (matriz[i][direita] != 0)
                zero = false;
        }
        direita -= 1;
    }
    return "S";
}

module.exports = matriz_escada_2;