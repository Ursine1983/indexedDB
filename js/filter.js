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
        let typeCheckboxes = document.querySelectorAll(".type");

        colorCheckboxes.forEach(function(val) {
            if(val.checked) {
                colorFilter.push(val.name);
            };
        });

        let resolvedNames = Filter.combi(colorFilter.sort(), []);
        
        if(Object.keys(resolvedNames).length == 0) {
            filterObj.colorFilter = {
                "any": true
            }
        }
        else {
            resolvedNames["Colorless"] = 'C';
            filterObj.colorFilter = resolvedNames;
            filterObj.colorFilter["any"] = false;
        }
        
        filterObj.typeFilter = {
            "any": true
        };

        typeCheckboxes.forEach(function(val) {
            if(val.checked) {
                filterObj.typeFilter["any"] = false;
                filterObj.typeFilter[val.name] = 1;
            }
        });
        
        return filterObj;
    }

    static filter = function (data, filterObj) {
        let tmpData = [];

        data.forEach(function(val) {
            console.log(filterObj.colorFilter);
            if(filterObj.colorFilter.hasOwnProperty(val.info.color) || filterObj.colorFilter.any) {
                if(filterObj.typeFilter.hasOwnProperty(val.info.type) || filterObj.typeFilter.any) {
                    tmpData.push(val);
                }
            }
        });

        return tmpData;
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