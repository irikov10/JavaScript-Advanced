function deckOfCards(array) {
    let resultArray = [];
    
    try {
        array.forEach(card => {
            let suit = card.charAt(array.length - 1);
            let face = card.slice(0, array.length - 1);
            resultArray.push(cards(face, suit).toString())
        });

        console.log(resultArray.join(' '))
    } catch (error) {
        console.log(error.message);
    }


    function cards(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            'S': '\u2660', 
            'H': '\u2665', 
            'D': '\u2666', 
            'C': '\u2663',
        };
    
        if(!faces.includes(face)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        if(!Object.keys(suits).includes(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return {
            face: face,
            suit: suit,
    
            toString() {
                return this.face + suits[this.suit]
            }
        }
    }
}
deckOfCards(['AS', '10D', 'KH', '2C'])