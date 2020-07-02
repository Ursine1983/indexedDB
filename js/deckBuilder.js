class DeckBuilder {
    constructor() {
        this.deckList = {
            commanderName: "",
            deckLink: "null",
            deckName: "",
            name: "decks",
            thumbnailUrl: "",
            values: []
        };

        let cards = document.querySelectorAll(".cardWrapperSingle");
        
        cards.forEach(function(val) {
            console.log(this);
            if(val.hasOwnProperty('data-addCardEvent') && val.getAttribute('data-addCardEvent')) {
                val.removeEventListener('click', DeckBuilder.addCard);
            }
            
            val.addEventListener('click', DeckBuilder.addCard);

            val.setAttribute('data-addCardEvent', true);
        });
    }

    render = function() {
        if(document.querySelector("div.sideBar").innerHTML != "") {
            document.querySelector("div.sideBar").innerHTML = "";
        }
        else {
            document.querySelector("div.sideBar").innerHTML = "";    
            
            let t1 = document.querySelector('#deckMetaInfo');
            let t2 = document.querySelector("#deckBuilder");
            let clone1 = document.importNode(t1.content, true);
            let clone2 = document.importNode(t2.content, true);

            document.querySelector("div.sideBar").appendChild(clone1);
            document.querySelector("div.sideBar").appendChild(clone2);
        }
        
    }

    static addCard = function(event) {
        console.log('foo');
        console.log(event);
    }
}