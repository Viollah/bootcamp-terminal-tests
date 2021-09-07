let assert = require("assert");
let totalPhoneBill = require("../function/totalPhoneBill");
  
  describe('totalPhoneBill',function(){
    it("This should show the total phone bill of call,sms,call,sms",function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

    })
    it("This should show the total phone bill of call,sms",function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
   
    })
    it("This shpuld show the total phone bill of sms,sms",function(){
      assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })

});