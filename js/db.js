class DB {
    constructor() {
        let request = window.indexedDB.open("cimDB", 5);

        // request handling stub
        request.onerror = function(event) {
            // Do something with request.errorCode!
        };

        request.onsuccess = function(event) {

        };

        request.onupgradeneeded = function(event) {
            let db = event.target.result;
            
            let inventory = db.createObjectStore("inventory", { keyPath: "cardName" });
            let wants = db.createObjectStore("wants", { keyPath: "cardName" });
            let decks = db.createObjectStore("decks", { keyPath: "deckName" });

            inventory.createIndex("cardName", "cardName", { unique: true });
            wants.createIndex("cardName", "cardName", { unique: true });
            decks.createIndex("deckName", "deckName", { unique: true });
        };
    }

    insert(post) {
        let request = window.indexedDB.open("cimDB");
        
        request.onsuccess = function(event) {
            let db = request.result;
            let dbInstance = new DB();
            
            post.values.forEach(function(target) {
                if(post.name == "inventory") {
                    dbInstance.select("inventory", target.cardName, function(store, data){
                        if(data == undefined) {
                            let insertStore;
                            let transaction;
    
                            transaction = db.transaction(post.name, "readwrite");
                            insertStore = transaction.objectStore(post.name);
    
                            let insert = insertStore.add(target);
                            
                            insert.onsuccess = function(event) {
                                if(insertStore.name == "inventory") {
                                    let db = new DB();
                                    
                                    db.updateQuantity("subtract", target.quantity, target.cardName, "wants", false);
                                }
                            };
    
                            insert.onerror = function(event) {
                                console.log(event);
                            }
                        }
                        else {
                            dbInstance.updateQuantity("add", target.quantity, target.cardName, "inventory", false);
                        }
                    });
                }
                else {
                    let insertStore;
                    let transaction;

                    transaction = db.transaction(post.name, "readwrite");
                    insertStore = transaction.objectStore(post.name);

                    let insert = insertStore.add(target);
            
                    insert.onerror = function(event) {
                        console.log(event);
                    }
                }
            });
        }
    }

    insertDeck(post) {
        let request = window.indexedDB.open("cimDB");
        
        request.onsuccess = function(event) {
            let db = request.result;
            let store;
            let transaction;

            transaction = db.transaction(post.name, "readwrite");
            store = transaction.objectStore(post.name);

            store.add(post).onsuccess = function(event) {
                let db = new DB();

                post.values.forEach(function(target) {
                    db.select("inventory", target.cardName, function(store, data){
                        //console.log(data);
                        if(data == undefined) {
                            let tmpPost = {
                                "name": "wants",
                                "values": [target]
                            }
                            
                            db.insert(tmpPost);
                        }

                        //if(data /*quantity*/) {

                        //}
                    });
                });
            };
        }
    }

    select(store, target, callback) {
        let request = window.indexedDB.open("cimDB");

        request.onsuccess = function(event) {
            let db = request.result;

            if(target == undefined) {
                db.transaction(store).objectStore(store).getAll().onsuccess = function(event) {
                    callback(store, event.target.result);
                };
            }
            else {
                db.transaction(store).objectStore(store).get(target).onsuccess = function(event) {
                    callback(store, event.target.result);
                };
            }
        }
    }

    updateQuantity(direction, amount, target, store, manual) {
        let request = window.indexedDB.open("cimDB");

        request.onsuccess = function(event) {
            let db = request.result;

            db.transaction([store], "readwrite").objectStore(store).get(target).onsuccess = function(event) {
                let data = event.target.result;

                if(data != undefined) {
                    switch(direction) {
                        case "add":
                                    data.quantity = parseInt(data.quantity) + parseInt(amount);
                                    break;
                        case "subtract":
                                    data.quantity = parseInt(data.quantity) - parseInt(amount);
                                    break;
                        case "update":
                                    data.quantity = amount;
                                    break;
                    }
                    
                    if(data.quantity == 0) {
                        db.transaction([store], "readwrite").objectStore(store).delete(target).onsuccess = function(event) {
                            if(manual) {
                                document.querySelector("div#" + store + " div." + target.replace(/(\s)|(\,)|(\/)|(\')/g,'').remove());
                            }
                        };
                    }
                    else {
                        db.transaction([store], "readwrite").objectStore(store).put(data).onsuccess = function(event) {
                            if(store == "inventory") {
                                let db = new DB();
                                
                                db.updateQuantity("subtract", amount, target, "wants", false);
                            }
    
                            if(manual) {
                                console.log(store);
                                console.log(target.replace(/\s/g,''));
                                document.querySelector("div#" + store + " div." + target.replace(/(\s)|(\,)|(\/)|(\')/g,'') + " input").value = data.quantity;
                            }
                        };
                    }
                }
                else {
                    console.log("Data undefined");
                }
            };
        }; 
    }

    compare(input, store, callback) {
        let request = window.indexedDB.open("cimDB");

        request.onsuccess = function(event) {
            let db = request.result;
            let match = true;
            let transaction = db.transaction(store);
            let result = transaction.objectStore(store).openCursor();

            result.onsuccess = function(event) {
                let cursor = event.target.result;
                
                if(cursor) {
                    if(input.values[cursor.value.cardName] > cursor.value.quantity) {
                        match = false;
                    }
                    
                    cursor.continue();
                }
            }

            transaction.oncomplete = function(event) {
                callback(match); 
            }
        }
    }
}