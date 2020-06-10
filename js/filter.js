/* 
WIP - not yet implemented
*/
class Filter {
    constructor() {
        document.querySelector("a#applyFilter").addEventListener("click", function() {
            this.select("inventory");
        });

        document.querySelector("a#showFilter").addEventListener("click", function() {

        });
    }

    select = function(store, target) {
        let db = new DB();
        db.select(store, target, function(store, data){
            let filterObj = Filter.getFilterObj();
            let render = new Render();
            data = this.filter(data, filterObj);
            
            render.render(store, data);
        });
    }

    static getFilterObj = function () {
        
    }

    filter = function (data, filterObj) {
        
    }
}