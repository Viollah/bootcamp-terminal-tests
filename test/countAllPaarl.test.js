let assert = require("assert");
let countAllPaarl = require("../function/countAllPaarl");

describe('CountAllPaarl',function(){
    it("This should shold the first count of the paarl", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

      
    })
    it("This should should the second count of the paarl", function(){
        

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
});