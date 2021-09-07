module.exports=function mostProfitableDepartment(salesData1){
    const departListing ={};
    for (var i=0;i<salesData1.length;i++){
      const prod = salesData1[i];
      departListing[prod.department]=0;
      
    }
     for(var i=0; i<salesData1.length;i++){
       const prod = salesData1[i];
       var depart = departListing[prod.department];
       depart += prod.sales;
       departListing[prod.department]= depart 
  }
    var currSales=0;
    var currDepart= '';
    for(const departSales in departListing){
      const currDepartSales =departListing[departSales];
      if(currDepartSales>currSales){
       currSales=currDepartSales;
        currDepart=departSales;
      }
    }
    return currDepart;
  }
  
 