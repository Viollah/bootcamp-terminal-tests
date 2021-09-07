
module.exports=function fromWhere(regNum){
    switch(regNum){
        case 'CY':
        return 'Bellville';
        break;
        case 'CJ':
        return 'Paarl';
        break;
        case 'CA':
        return 'Cape Town';
        break;
        case 'CC':
        return 'Some other place!';
        break;
                 }
  }
// console.log(fromWhere('CY'), 'Bellville');
// console.log(fromWhere('CJ'), 'Paarl');
// console.log(fromWhere('CA'), 'Cape Town');
// console.log(fromWhere('CC'), 'Some other place!');
