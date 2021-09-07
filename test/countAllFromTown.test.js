
let assert = require("assert");
let countAllFromTown = require("../function/countAllFromTown");

  
  describe('CountAllFromTown',function(){
    it("This should the first town from the count",function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

        assert.equal(fromStellies, 3)
    })
    it("This should show the second town from the count",function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

        assert.equal(fromKuilsriver, 1)
        
    })
});