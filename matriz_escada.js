/**
 * Represents the matrix problem.
 * @param {number} n - number of lines.
 * @param {number} m - number of columns.
 * @param {Array<Array>} matriz - Matrix.
 */
function matriz_escada(n, m, matriz) {

    if (matriz.length != n)
        return "N";
    if (matriz.length > 0){
        for (var i = 0; i < matriz.length; i++){
            if (matriz[i].length != m){
                return "N";
            }
            for (var j = 0; j < matriz[i].length; j++){
                if (matriz[i][j] < 0 || matriz[i][j] > 100000)
                    return "N";
            }
        }
    }

    var lastLeftIndex = -1;
    for (var i = 0; i < matriz.length; i++) {
        var line = matriz[i];
        var thisLeftIndex = -1;
        var lastZeroIndex = -1;
        for (var j = 0; j < line.length; j++){
            if (line[j] == 0){
                lastZeroIndex = j;
            }
        }
        thisLeftIndex = lastZeroIndex;
        // console.log("i=" + i);
        // console.log("last=" + lastLeftIndex);
        // console.log("most=" + thisLeftIndex);
        if (lastLeftIndex >= thisLeftIndex && i > 0)
            return "N";
        else
            lastLeftIndex = thisLeftIndex;
    }
    return "S";
}

module.exports = matriz_escada;