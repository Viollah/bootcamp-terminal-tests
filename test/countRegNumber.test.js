let assert = require("assert");
let countRegNumber = require("../function/countRegNumber");

describe('The countRegNumber function', function(){

    it('should show count in 3 reg', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    
    it('should show count in 1 reg', function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});