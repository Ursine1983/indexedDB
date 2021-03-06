/*
Class to handle the API call. The return values are transformed into the card objects used in the tool
*/
class Scryfall {
    constructor() {}

    call(tmpCardNames) {
        return new Promise(function (resolve)  { 
            let xhr = new XMLHttpRequest();
            
            xhr.open('POST', 'https://api.scryfall.com/cards/collection');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                let cardInfo = [];
                let parsedResponse = JSON.parse(xhr.response);

                parsedResponse.data.forEach(function(el) {
                    let colorId = el.color_identity;

                    // check is the data is of a specialised type that has a differing JSON layout
                    if(el.hasOwnProperty("card_faces") && el.layout != "adventure") {
                        el = el.card_faces[0];
                    }
                    
                    // transform data
                    for(let i = 0; i < tmpCardNames.identifiers.length; i++) {
                        if(tmpCardNames.identifiers[i].name.toLowerCase() == el.name.toLowerCase()) {
                            let tmpColor;
                            let tmpTypeArray;
                            let tmpType;
                            let tmpImageLink = el.image_uris.normal;
                            let colorMap = new ColorMap();

                            tmpColor = colorMap.colorStringFromResponse(colorId);
                     
                            tmpTypeArray = el.type_line.split(String.fromCharCode(8212))[0].trim().split(" ");

                            // apply weighted type assignment. Some data has multiple types when it returns
                            if(tmpTypeArray.includes("Legendary") && tmpTypeArray.includes("Creature")) {
                                tmpType = "Legendary";
                            } 
                            else if (tmpTypeArray.includes("Land")) {
                                tmpType = "Land";
                            }
                            else if (tmpTypeArray.includes("Creature")) {
                                tmpType = "Creature";
                            }
                            else if (tmpTypeArray.includes("Artifact")) {
                                tmpType = "Artifact";
                            }
                            else if (tmpTypeArray.includes("Enchantment") ){
                                tmpType = "Enchantment";
                            }
                            else if (tmpTypeArray.includes("Planeswalker")) {
                                tmpType = "Planeswalker";
                            }
                            else if (tmpTypeArray.includes("Instant")) {
                                tmpType = "Instant";
                            }
                            else if (tmpTypeArray.includes("Sorcery")) {
                                tmpType = "Sorcery";
                            }
                            
                            // populate card object
                            cardInfo.push({
                                "name": el.name,
                                "cardInfo": {
                                    color: tmpColor,
                                    type: tmpType,
                                    imageLink: tmpImageLink
                                }
                            });
                        }
                    }
                });
                
                resolve(cardInfo);
            };

            xhr.send(JSON.stringify(tmpCardNames));
        });
    }
}