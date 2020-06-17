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
}