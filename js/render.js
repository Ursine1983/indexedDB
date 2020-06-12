/*
Class to handle all render operations. Several methods in this class are too long and need to be refactored 
*/
class Render {
    constructor() {
        //TODO: move object structures and defines to config files or the db
        this.pages = ["inventory", "decks", "wants"];
        this.cardListSorting = {
            "Colorless": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "White": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Blue": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Black": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Red": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Green": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Azorius": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Orzohv": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Boros": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Selesnya": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Dimir": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Izzet": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Simic": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Rakdos": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Golgari": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Gruul": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Esper": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Jeskai": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Bant": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Mardu": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Abzan": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Naya": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Grixis": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Sultai": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Temur": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Jund": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Glint-Eye": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Dune-Brood": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Witch-Maw": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Yore-Triller": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Ink-Treader": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            },
            "Chroma": {
                "Legendary": [],
                "Creature": [],
                "Enchantment": [],
                "Sorcery": [],
                "Instant": [],
                "Planeswalker": [],
                "Artifact": [],
                "Land": []
            }
        }
    }

    // initialise render process
    render = function(view, data) {
        if(this.pages.includes(view)) {
            this.renderPage(view, data);
        }
    }

    // switch to render a page view with either card object lists or deck object lists
    renderPage = function(view, data) {
        if(view != "decks") {
            this.renderListView(view, data);
        }
        else {
            this.renderDecksView(data);
        }
    }

    // render a dialog
    static renderDialog = function(event) {
        if(document.querySelector("div.dialog")) {
            document.querySelector("div.dialog").remove();    
        }
        
        let dialogClassArr = event.target.classList;
        let dialogType;
        let missingCardsArr = false;
        let deckList = false;
        let dialog = document.createElement("div");
        let close = document.createElement("span");
        let headline = document.createElement("h2");
        
        for (let i = 0; i < dialogClassArr.length; i++) {
            if (dialogClassArr[i].substring(0, 6) == "status") {
                dialogType = dialogClassArr[i].split("status")[1];
                break;
            }
            else {
                dialogType = dialogClassArr[i];
            }
        }
        
        dialog.classList.add("dialog");
        close.innerHTML = "X";
        close.classList.add("close");

        switch(dialogType) {
            case "InvMissing":
                                missingCardsArr = event.target.dataset.missingCards.split(",");
                                dialog.style.borderColor = "";
                                headline.innerHTML = "Missing Cards";
                                headline.classList.add("missingCardsHeadlineStyle");
                                break;
            case "displayList":
                                deckList = Render.generateDeckLists();
                                headline.innerHTML = "Card List";
                                headline.classList.add("missingCardsHeadlineStyle");
                                break;
        }
        
        document.querySelector("body").append(dialog);
        document.querySelector("div.dialog").append(headline);
        document.querySelector("div.dialog").append(close);
        document.querySelector("div.dialog .close").addEventListener("click", function(event) {
            event.target.parentNode.remove();
        });

        if(missingCardsArr) {
            Render.renderMissingCards(missingCardsArr);
        }

        if(deckList) {
            Render.renderDeckList(deckList);
        }
    }

    // render list in dialog with no additional structure or formating
    static renderMissingCards = function(missingCardsArr) {
        missingCardsArr.forEach(function(missingCard) {
            let cardRow = document.createElement("span");

            cardRow.classList.add("cardRow");
            cardRow.innerHTML = missingCard;
            document.querySelector("div.dialog").append(cardRow);
        });
    }

    // render list in dialog with additional structure or formating to visualise the deck object meta data
    static renderDeckList = function(data) {
        document.querySelector("div.dialog").classList.add("dialogWide");
        Object.keys(data).forEach(function(headline) {
            let headlineRow = document.createElement("span");

            headlineRow.classList.add("headlineRow");
            headlineRow.classList.add(headline);
            headlineRow.innerHTML = headline;
            document.querySelector("div.dialog").append(headlineRow);

            Object.keys(data[headline]).forEach(function(subline) {
                let sublineRow = document.createElement("span");
                let wrapper = document.createElement("div");
                sublineRow.classList.add("sublineRow");
                sublineRow.innerHTML = subline;
                wrapper.classList.add(headline + subline);
                document.querySelector("div.dialog").append(sublineRow);
                document.querySelector("div.dialog").append(wrapper);

                Object.keys(data[headline][subline]).forEach(function(idx) {
                    
                    let cardRow = document.createElement("span");

                    cardRow.classList.add("cardRow");
                    cardRow.innerHTML = 
                    "<span class='cardRowQuantity'>" + data[headline][subline][idx].quantity + "</span>" + 
                    "<span class='cardRowCardName'>" + data[headline][subline][idx].cardName + "</span>" + 
                    "<span class='cardRowDeckName'>" + data[headline][subline][idx].deckName + "</span>";
                    document.querySelector("div." + headline + subline).append(cardRow);
                });
            });
        });
    }

    // build list from data encapsulated by a deck object
    static generateDeckLists = function() {
        let deckListContainerArr = document.querySelectorAll("div.statusOwned input:checked");
        let deckListArr = [];
        let displayList = {};

        deckListContainerArr.forEach(function(container) {
            deckListArr.push(JSON.parse(container.parentNode.parentNode.parentNode.dataset.deckInfo));
        });

        if(deckListArr.length > 0) {
            deckListArr.forEach(function(deck) {
                deck.values.forEach(function(card) {
                    if(!displayList.hasOwnProperty(card.info.color)) {
                        displayList[card.info.color] = {};
                    }
    
                    if(!displayList[card.info.color].hasOwnProperty(card.info.type)) {
                        displayList[card.info.color][card.info.type] = [];
                    }
    
                    displayList[card.info.color][card.info.type].push({
                        "deckName": deck.deckName,
                        "cardName": card.cardName,
                        "quantity": card.quantity
                    });
                });
            });
        }

        return displayList;
    }

    // render a view with a list of card objects
    renderListView = function(view, data) {
        let tmpSorting = this.cardListSorting;

        data.forEach(el => {
            tmpSorting[el.info.color][el.info.type].push([el.cardName, el.quantity, el.info.imageLink]);
        });

        for(const color in tmpSorting) {
            for(const type in tmpSorting[color]) {
                if(tmpSorting[color][type].length == 0) {
                    delete tmpSorting[color][type];
                }
            }
            
            if(Object.keys(tmpSorting[color]).length == 0) {
                delete tmpSorting[color];
            }
        }

        document.querySelector("div#" + view + " div.content").innerHTML = "";

        Object.keys(tmpSorting).forEach(function(headlineColor) {
            let t1 = document.querySelector('#headline');
            t1.content.querySelector("h2").innerHTML = headlineColor;
            let clone1 = document.importNode(t1.content, true);
            document.querySelector("div#" + view + " div.content").appendChild(clone1);

            Object.keys(tmpSorting[headlineColor]).forEach(function(sublineType) {
                let t2 = document.querySelector('#subline');
                t2.content.querySelector("h4").innerHTML = sublineType;
                let clone2 = document.importNode(t2.content, true);
                document.querySelector("div#" + view + " div.content").appendChild(clone2);

                Object.keys(tmpSorting[headlineColor][sublineType]).forEach(function(cardIdx) {
                    let cardArr = tmpSorting[headlineColor][sublineType][cardIdx];
                    let t3 = document.querySelector('#card');
                    t3.content.querySelector("span.cardName").innerHTML = cardArr[0];
                    t3.content.querySelector("input.quantity").value = cardArr[1];
                    t3.content.querySelector("img").src = cardArr[2];
                    
                    let clone3 = document.importNode(t3.content, true);
                    clone3.querySelector("div.cardWrapperSingle").classList.add(cardArr[0].replace(/(\s)|(\,)|(\/)|(\')/g,''));
                    document.querySelector("div#" + view + " div.cardWrapper:last-child").appendChild(clone3);
                });
            });
        });

        let plus = document.querySelectorAll(".plus")
                    
        plus.forEach(function(el) {
            el.removeEventListener('click', Render.updateQuantity);
            el.addEventListener('click', Render.updateQuantity);
        });

        let minus = document.querySelectorAll(".minus")
                    
        minus.forEach(function(el) {
            el.removeEventListener('click', Render.updateQuantity);
            el.addEventListener('click', Render.updateQuantity);
        });

        let quantity = document.querySelectorAll(".quantity")
                    
        quantity.forEach(function(el) {
            el.removeEventListener('blur', Render.updateQuantity);
            el.addEventListener('blur', Render.updateQuantity);
        });
    }

    // render a view with a list of deck objects
    renderDecksView = function (data) {
        document.querySelector("div#decks div.content div.owned").innerHTML = "";
        document.querySelector("div#decks div.content div.unowned").innerHTML = "";
        let db = new DB();

        data.forEach(function(deck) {
            let missingArr = [];
            let t1 = document.querySelector('#deck');
            let clone1 = document.importNode(t1.content, true);
            let deckLink = document.createElement("a");

            deckLink.setAttribute("href", deck.deckLink);
            deckLink.setAttribute("target", "_blank");
            deckLink.classList.add("deckLink");

            clone1.querySelector("span.deckName").innerHTML = deck.deckName;
            clone1.querySelector("div.deckWrapper").style.backgroundImage  = "url('" + deck.thumbnailUrl + "')";
            
            for(let i = 0; i < deck.values.length; i++) {
                if(deck.values[i].cardName == deck.commanderName) {
                    clone1.querySelector("div.deckWrapper").classList.add(deck.values[i].info.color);
                }

                db.select("inventory", deck.values[i].cardName, function(store, data){
                    if(data == undefined) {
                        missingArr.push(deck.values[i].cardName);
                    }
                    
                    if(i == deck.values.length - 1) {
                        clone1.querySelector("div.deckWrapper").appendChild(deckLink);
                        let deckObjArr;

                        if(missingArr.length == 0) {
                            clone1.querySelector("div.deckWrapper").classList.add("statusOwned");
                            clone1.querySelector("div.deckWrapper").dataset.deckInfo = JSON.stringify(deck);
                            document.querySelector("div#decks div.content div.owned").appendChild(clone1);
                            deckObjArr = document.querySelectorAll("div#decks div.content div.owned div.deckWrapper:last-of-type");
                        }
                        else {
                            clone1.querySelector("div.deckWrapper").dataset.missingCards = missingArr.join();
                            document.querySelector("div#decks div.content div.unowned").appendChild(clone1);
                            deckObjArr = document.querySelectorAll("div#decks div.content div.unowned div.deckWrapper:last-of-type");
                        }

                        deckObjArr.forEach(function(el) {
                            el.removeEventListener('click', Render.renderDialog);

                            if(el.dataset.deckInfo) {
                                el.style.cursor = "pointer";

                                let deckSwitch = document.createElement("span");
                                deckSwitch.classList.add("deckSwitch");

                                deckSwitch.innerHTML = "<label class='switch'><input type='checkbox'><span class='slider round'></span></label>";
                                el.appendChild(deckSwitch);
                                el.querySelector(".deckSwitch").addEventListener("click", function(event) {
                                    if(event.target.type == "checkbox") {
                                        let checkedInputs = document.querySelectorAll("div.statusOwned input:checked");
                                        let uncheckedInputs = document.querySelectorAll("div.statusOwned input[type=checkbox]:not(:checked)");
                                        let deckListArr = [];

                                        checkedInputs.forEach(function(el) {
                                            deckListArr.push(JSON.parse(el.parentNode.parentNode.parentNode.dataset.deckInfo));
                                            Render.enableDeck(el);
                                        });

                                        uncheckedInputs.forEach(function(el) {
                                            let mergedList = Render.mergeDecklists(deckListArr, false);
                                            let tmpDeckListArr = [JSON.parse(el.parentNode.parentNode.parentNode.dataset.deckInfo)];
                                            let tmpMergedList = Render.mergeDecklists(tmpDeckListArr, mergedList);
                                            let db = new DB();
                                            db.compare(tmpMergedList, "inventory", function(match) {
                                                if(match) {
                                                    Render.enableDeck(el);
                                                }
                                                else {
                                                    Render.disableDeck(el);
                                                }
                                            });
                                        });
                                    }
                                })
                            }
                            if(el.dataset.missingCards) {
                                let showMissingButton = document.createElement("span");

                                showMissingButton.innerHTML = "Show Missing Cards";
                                showMissingButton.classList.add("showMissingButton");
                                showMissingButton.classList.add("statusInvMissing");
                                showMissingButton.dataset["missingCards"] = el.dataset.missingCards;
                                
                                el.appendChild(showMissingButton);
                                
                                let showMissingButtonArr = document.querySelectorAll("div#decks div.content div.deckWrapper span.showMissingButton");

                                showMissingButtonArr.forEach(function(elem) {
                                    elem.removeEventListener('click', Render.renderDialog);
                                    elem.addEventListener('click', Render.renderDialog);
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    // merge list data from deck objects to display combined lists
    static mergeDecklists = function(deckListArr, mergedDecklists) {
        let mergedList;

        if(mergedDecklists != false) {
            mergedList = mergedDecklists;
        }
        else {
            mergedList = {
                "namesArr": [],
                "values": {}
            }
        }
        
        deckListArr.forEach(function(deck) {
            mergedList.namesArr.push(deck.deckName);
            deck.values.forEach(function(card) {
                if(mergedList.values.hasOwnProperty(card.cardName)) {
                    mergedList.values[card.cardName] += parseInt(card.quantity);
                }
                else {
                    mergedList.values[card.cardName] = parseInt(card.quantity);
                }
            });
        });

        return mergedList;
    }

    // visualise deck objects that can not be built due to currently selected permutation of other deck objects
    static disableDeck = function(elem) {
        elem.parentNode.parentNode.parentNode.querySelector(".deckLink").style.backgroundColor = "rgba(100,100,100,0.7)";
        elem.disabled = true;
        elem.parentNode.querySelector(".slider").classList.add("sliderDisabled");
        elem.parentNode.querySelector(".slider").style.backgroundColor = "rgba(100,100,100,0.7)";
    }

    // visualise deck objects that can be built due to currently selected permutation of other deck objects
    static enableDeck = function(elem) {
        elem.parentNode.parentNode.parentNode.querySelector(".deckLink").style.backgroundColor = "transparent";
        elem.disabled = false;
        elem.parentNode.querySelector(".slider").classList.remove("sliderDisabled");
        if(elem.checked) {
            elem.parentNode.querySelector(".slider").style.backgroundColor = "#057b05";
        }
        else {
            elem.parentNode.querySelector(".slider").style.backgroundColor = "#ccc";
        }
    }

    // visualise a change in the value of the quantety property
    static updateQuantity = function (event) {
        let db = new DB();
        let target = event.target.parentNode.parentNode.querySelector("span.cardName").innerHTML;
        let direction;
        let amount;
        let store = document.location.hash.split("#")[1];
        
        switch(event.target.classList.value) {
            case "plus":
                        direction = "add";
                        amount = 1;
                        break;
            case "minus":
                        direction = "subtract";
                        amount = 1;
                        break;
            case "quantity":
                        direction = "update";
                        amount = event.target.value;
        }

        db.updateQuantity(direction, amount, target, store, true);
    }

    static renderFilter(view) {
        let hasFilter = {
            "#deck": false,
            "#wants": true,
            "#inventory": true,
            "#import": false
        }
        let doRender = false;
        if(document.querySelector("div.filterWrapper") != null) {
            if(document.querySelector("div" + view + " div.filterWrapper") == null) {
                doRender = true;
            }

            document.querySelector("div.filterWrapper").remove();
        }
        else {
            doRender = true;
        }
        
        if(doRender && hasFilter[view]) {
            let t1 = document.querySelector('#filter');
            t1.content.querySelector("div.filterWrapper").setAttribute('data-view', view.split('#')[1]);
            let clone1 = document.importNode(t1.content, true);
            document.querySelector("div" + view + " h1.pageHeadline").after(clone1);
            let filter = new Filter();       
        }
    }
}