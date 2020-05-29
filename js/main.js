/*
Gerneral functions and code
*/
document.addEventListener("DOMContentLoaded", function(event) {
    // Setup navigation and navigation highlighting
    let nav = document.querySelectorAll("nav span a");

    Array.from(nav).forEach(link => {
        link.addEventListener("click", function(event) {
            let wrapperAll = document.querySelectorAll(".wrapper");
            Array.from(wrapperAll).forEach(link => {
                link.classList.remove("show");
            });

            let page = event.target.getAttribute("name");
            let wrapper = "div#" + document.querySelector(page).getAttribute("id");
            
            document.querySelector(wrapper).classList.add("show");
        });
    });

    // eventhandlers to trigger data selection on navigation
    document.querySelector("a[name='#inventory']").addEventListener("click", function() {
        select("inventory");
    });

    document.querySelector("a[name='#wants']").addEventListener("click", function() {
        select("wants");
    });

    document.querySelector("a[name='#decks']").addEventListener("click", function() {
        select("decks");
    });

    // eventhandler to handle data input form behaviour for different input types
    document.querySelector("select[name='inputType']").addEventListener('change', function(event) {
        let deckInfo = document.querySelector("div.deckInfo");
        let textarea = document.querySelector("textarea");

        if(event.target.value == "Deck") {
            deckInfo.classList.add("show");
            textarea.classList.add("short");
        }
        else {
            deckInfo.classList.remove("show");
            textarea.classList.remove("short");
        }
    });

    // eventhandler to trigger render of dialogs
    document.querySelector("span.displayList").addEventListener('click', function(event) {
        Render.renderDialog(event);
    });

    // function to insert data into the db
    function insertIntoDB(cardInfo, post) {
        let enrichedPost = {};

        enrichedPost.name = post.name;
        enrichedPost.values = [];

        cardInfo.forEach(function(card) {
            for(let i = 0; i < post.values.length; i++) {
                if(card.name.toLowerCase() == post.values[i].cardName.toLowerCase()) {
                    post.values[i].info = card.cardInfo;
                    post.values[i].cardName = card.name;
                    enrichedPost.values.push(post.values[i]);
                }
            }
        });

        let db = new DB();
        
        db.insert(enrichedPost);
    }

    // function to select data from the db
    function select(store, target) {
        let db = new DB();
        db.select(store, target, function(store, data){
            let render = new Render();
            render.render(store, data);
        });
    }

    // function to handle the form submit on the import page 
    function handleSubmit(e) {
        e.preventDefault();
        let page = document.location.hash;
        let wrapper = "div" + page;
        let tableName = document.querySelector(wrapper + " option:checked").getAttribute("name");
        let inputValue = document.querySelector(wrapper + " textarea").value;
        let inputArr = inputValue.split("\n");
        var post = {};
        let idx = 0;
        let idxMax;
        let tmpInputArr = [];
        
        // add additional stuff for decks

        post.name = tableName;
        post.values = [];

        // handle deck submits
        if(tableName == "decks") {
            fetchingDecklist = true;
            post.deckName = document.querySelector("input[name='deckName']").value;
            post.thumbnailUrl = document.querySelector("input[name='thumbnailUrl']").value;
            post.commanderName = document.querySelector("input[name='commanderName']").value;
            post.deckLink = document.querySelector("input[name='deckLink']").value;
            handleDecklist(post, inputArr);
        }
        // handle non-deck submits
        else {
            while(idx < inputArr.length) {
                // split sumbits into chunks. API has a size limit per request
                if(idx + 50 > inputArr.length) {
                    idxMax = inputArr.length;
                }
                else {
                    idxMax = idx + 50
                }
    
                tmpInputArr.push(inputArr.slice(idx, idxMax));
    
                idx += 50;
            }
            
            for(let i = 0; i < tmpInputArr.length; i++) {
                let tmpCardNames = {
                    "identifiers": []
                };
    
                for(let j = 0; j < tmpInputArr[i].length; j++) {
                    let quantity = tmpInputArr[i][j].split(/ (.+)/)[0].split("x")[0];
                    let cardName = tmpInputArr[i][j].split(/ (.+)/)[1];
                    
                    tmpCardNames.identifiers.push({"name": cardName});
                    post.values.push({"quantity": quantity, "cardName": cardName}); 
                }
                
                let scryfall = new Scryfall();
                
                // make API call and write to db on callback
                scryfall.call(tmpCardNames).then(function (cardInfo) {
                    insertIntoDB(cardInfo, post);
                });
            }
        }
    }

    // function to handle the API and db calls needed to write a deck object
    function handleDecklist(post, inputArr) {
        let count = inputArr.length;
        let scryfall = new Scryfall();
        
        for(let i = 0; i < inputArr.length; i++) {
            let tmpCardNames = {
                "identifiers": []
            };

            let quantity = inputArr[i].split(/ (.+)/)[0].split("x")[0];
            let cardName = inputArr[i].split(/ (.+)/)[1];
            
            tmpCardNames.identifiers.push({"name": cardName});
            post.values.push({"quantity": quantity, "cardName": cardName});

            scryfall.call(tmpCardNames).then(function (cardInfo) {
                count--;
                
                for(let i = 0; i < post.values.length; i++) {
                    if(post.values[i].cardName == cardInfo[0].name) {
                        post.values[i].info = cardInfo[0].cardInfo;
                    }
                }

                if(count == 0) {
                    let db = new DB();

                    db.insertDeck(post);
                }
            });
        }
    }

    // event handler to handle the form submit
    document.getElementsByName("submitInsert")[0].addEventListener("click", handleSubmit);

    // handle one page navigation
    let hash = document.location.hash;

    if(!hash) {
        document.querySelector("nav span a[name='#decks']").click();
    }
    else {
        document.querySelector("nav span a[name='" + hash + "']").click();
    }
});