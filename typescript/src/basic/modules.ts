











interface stringValidate {
  isAccept(s:string): boolean;
}

var letterReg = /^[A-Za-z]+$/;
var numReg = /^[0-9]+$/;

class LetterStr implements stringValidate{
  isAccept(s:string): boolean{
    return letterReg.test(s);
  }
}

class ZipValidate implements stringValidate{
  isAccept(s:string): boolean{
    return s.length === 5 && numReg.test(s);
  }
}


// ts中的modules
module Validate{
  export interface StringTest{
    isAccept(s: string): boolean;
  }

  var strReg = /^[A-Za-z]+$/;
  var callReg = /^[0-9]+$/;

  export class MessageValidate implements StringTest{
    isAccept(s:string): boolean{
      return strReg.test(s);
    }
  }
  export class numberValidate implements StringTest{
    isAccept(s:string): boolean{
      return callReg.test(s);
    }
  }
}
















