/**
 * Represents the cards problem.
 * @param {Array} cards - Array of 5 cards.
 */
function cartas (cards){
    if (cards.length !== 5)
        return "E";

    for (var i = 0; i<cards.length; i++){
        if (!parseInt(cards[i]))
            return "E";
        if (cards[i] < 1 || cards[i] > 13)
            return "E";
    }

    if (cards.reduce(function(acc, el, i, arr) {
        if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []).length > 0)
        return "E";

    var asc = false;
    var desc = false;
    var accumulator = cards[0];
    cards = cards.slice(1, cards.length);

    cards.forEach(function (value) {
        if (accumulator < value){
            asc = true;
        }

        if (accumulator > value){
            desc = true;
        }

        accumulator = value;
    });

    return asc && desc ? "N" : asc && !desc ? "C" : !asc && desc ? "D" : "N";
}

module.exports = cartas;