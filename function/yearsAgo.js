module.exports= function yearsAgo(years){
    const year = new Date();
     return year.getFullYear()-years;
   }
  //  console.log((new Date().getFullYear() - 1976), yearsAgo(1976));
  //  console.log((new Date().getFullYear() - 2000), yearsAgo(2000));