module.exports=function mostProfitableDay(salesData2){
    const profit = {};
    for(var i=0;i<salesData2.length;i++){
      const prod1= salesData2[i];
      profit[prod1.day]=0;
    }
    for(var i=0;i<salesData2.length;i++){
      const prod1=salesData2[i];
      
      var currDay= profit[prod1.day];
      currDay += prod1.sales;
      profit[prod1.day]=currDay;
    }
    var currSales =0;
    var currDay = '';
    for(const daySales in profit){
      const currDaySales=profit[daySales];
      if(currDaySales>currSales){
        currSales=currDaySales;
        currDay=daySales;
      }
    }
    return currDay;
  }