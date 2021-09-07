let assert = require("assert");
let findItemsOver = require("../function/findItemsOver");


describe('findItemsOver',function(){
    it("This should the first list of items that are over", function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            // {name : 'pears', qty : 37},
            //  {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver(itemList));
    })
    it("This should the first list of items that is over", function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];

       
    var results2 = [];
        assert.deepEqual(results2, findItemsOver(itemList2));
    })
    it("This should the first list of items that is over", function(){
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
         var results3 = [
            // {name : 'apples', qty : 40},
            // {name : 'bananas', qty : 23},
            //  {name : 'apples', qty : 37}
         ];
         assert.deepEqual(results3, findItemsOver(itemList3));
    })
});