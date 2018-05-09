/**
 * Represents the cards problem.
 * @param {Array} cards - Array of 5 cards.
 */
function cartas_3 (cards){

    if (cards[0] > cards[1] && cards[1] > cards[2] && cards [2] > cards[3] && cards[3] > cards[4])
        return "D";
    if (cards[0] < cards[1] && cards[1] < cards[2] && cards [2] < cards[3] && cards[3] < cards[4])
        return "C";
    return "N";

}

module.exports = cartas_3;