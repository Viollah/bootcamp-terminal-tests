let assert = require("assert");
let fromWhere = require("../function/fromWhere");

describe('fromWhere',function(){
    it("This should show the registration for Bellville", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
  
    })
    it("This should show the registration for Paarl", function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
  
    })
    it("This should show the registration for Cape Town", function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
     
    })
    it("This should show the registration for some other place!", function(){
       assert.equal(fromWhere('CC'), 'Some other place!');
    })
});