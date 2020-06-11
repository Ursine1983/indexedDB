/*
Class to handle resolving color ids to strings
 */
class ColorMap {
    constructor() {
        this.colorMap = {
            "W": "White",
            "U": "Blue",
            "B": "Black",
            "R": "Red",
            "G": "Green",
            "UW": "Azorius",
            "BW": "Orzohv",
            "RW": "Boros",
            "GW": "Selesnya",
            "BU": "Dimir",
            "RU": "Izzet",
            "GU": "Simic",
            "BR": "Rakdos",
            "BG": "Golgari",
            "GR": "Gruul",
            "BUW": "Esper",
            "RUW": "Jeskai",
            "GUW": "Bant",
            "BRW": "Mardu",
            "BGW": "Abzan",
            "GRW": "Naya",
            "BRU": "Grixis",
            "BGU": "Sultai",
            "GRU": "Temur",
            "BGR": "Jund",
            "BGRU": "Glint-Eye",
            "BGRW": "Dune-Brood",
            "BGUW": "Witch-Maw",
            "BRUW": "Yore-Triller",
            "GRUW": "Ink-Treader",
        }
    }

    colorStringFromResponse(colorArr) {
        switch(colorArr.length) {
            case 0: 
                    return "Colorless";
            case 5:
                    return "Chroma";
            default:
                let tmpColorSelector = "";
                for(let i = 0; i < colorArr.length; i++) {
                    tmpColorSelector += colorArr[i];
                }
                return this.colorMap[tmpColorSelector];
        }
    }

    colorStringToName(colorString) {        
        switch(colorString.length) {
            case 0: 
                    return "Colorless";
            case 5:
                    return "Chroma";
            default:
                    return this.colorMap[colorString];
        }
    }
}