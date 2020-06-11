/* 
WIP - not yet implemented
*/
class Filter {
    constructor() {
        document.querySelector("input.applyFilter").addEventListener("click", function(event) {
            let view = event.target.closest("div.filterWrapper").getAttribute('data-view');
            Filter.select(view);
        });
    }

    static select = function(store, target) {
        let db = new DB();
        console.log(store);
        db.select(store, target, function(store, data){
            let filterObj = Filter.getFilterObj();
            let render = new Render();
            data = Filter.filter(data, filterObj);
            
            render.render(store, data);
        });
    }

    static getFilterObj = function () {
        let filterObj = {};
        let colorFilter = [];
        let colorCheckboxes = document.querySelectorAll(".color");

        colorCheckboxes.forEach(function(val) {
            if(val.checked) {
                colorFilter.push(val.name);
            };
        });

        let foo = Filter.combi(colorFilter.sort(), []);
console.log(foo);
        filterObj.colorFilter = colorFilter;

        return filterObj;
    }

    static filter = function (data, filterObj) {
        console.log(data, filterObj);

        return data;
    }

    static combi = function(filter, retObj = {}) {
        let colorMap = new ColorMap();
        let l = filter.length;
        let outputEntry = filter.join('');
        
        if(outputEntry.trim().length > 0) {
            retObj[colorMap.colorStringToName(outputEntry)] = outputEntry;
        }

        for(let i = 0; i < l; i++) {
            let tmpFilter;
            tmpFilter = filter.splice(i, 1);
            retObj = Filter.combi(filter, retObj);
            filter.splice(i, 0 , tmpFilter);
        }
        
        return retObj;
    }
}