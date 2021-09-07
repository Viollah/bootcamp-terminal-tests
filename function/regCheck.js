module.exports= function regCheck(regNo, regFrom) {
    return regNo.endsWith(regFrom);
  }
    // console.log(regCheck('DC 55 YU GP', 'GP'), true);
    // console.log(regCheck('DC 55 YU GP', 'EC'), false);
    // console.log(regCheck('5566 L', 'L'), true);
    // console.log(regCheck('5566 L', 'M'), false);
    // console.log(regCheck('ERT 123 EC', 'EC'), true);
    // console.log(regCheck('ERT 123 EC', 'GP'), false);
    // console.log(regCheck('FGT 123 MP', 'MP'), true);
    // console.log(regCheck('FGT 123 MM', 'MP'), false);