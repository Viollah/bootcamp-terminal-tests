module.exports=function isWeekday (dayCheck){
    return dayCheck.startsWith('Monday');
  }
  // console.log(isWeekday('Saturday'), false);
  // console.log(isWeekday('Monday'), true);