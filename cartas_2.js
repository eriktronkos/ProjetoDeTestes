/**
 * Represents the cards problem.
 * @param {Array} cards - Array of 5 cards.
 */
function cartas_2 (cards){
    var res = "";
    if (cards[1] > cards[0]){
        res = "C";
        for (var i = 1; i <= 5; i++){
            for (var j = i+1; j<= 5; j++){
                if (cards[i] > cards[j]){
                    res = "N";
                    break;
                }
            }
            if (res == "N")
                break;

        }
    }
    else{
       res = 'D';
        for (var i = 1; i <= 5; i++){
            for (var j = i+1; j<= 5; j++){
                if (cards[i] > cards[j]){
                    res = "N";
                    break;
                }
            }
            if (res == "N")
                break;

        }
    }
    return res;
}

module.exports = cartas_2;