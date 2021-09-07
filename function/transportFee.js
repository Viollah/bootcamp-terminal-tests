module.exports=function transportFee(fees){
    switch(fees){
      case 'morning':
        return 'R20';
        break;
        case 'afternoon':
        return 'R10';
        break;
        case 'nightshift':
        return 'free';
        break;
               }
  }
  // console.log(transportFee('morning'), 'R20');
  // console.log(transportFee('afternoon'), 'R10');
  // console.log(transportFee('nightshift'), 'free', 'for night shift return free');