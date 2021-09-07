let assert = require("assert");
let isWeekday = require("../function/isWeekday");



describe('Weekday or yearMonth',function(){
    it("This should show true if its weekDay",function(){
        assert.equal(isWeekday('Monday'), true);
    })
    it("This should show false if its not weekDay",function(){
        assert.equal(isWeekday('Saturday'), false);
    })
});