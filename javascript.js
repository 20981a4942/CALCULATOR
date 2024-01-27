let INPUT = DOCUMENT.GETELEMENTBYID('INPUTBOX');
let BUTTONS = DOCUMENT.QUERYSELECTORALL
('BUTTON');

let STRING = "";
let ARR = ARRAY.FROM(BUTTONS);
ARR.forEach(BUTTON => {
    BUTTON.ADDEVENTLISTNER('CLICK', (E) =>{
        if(E.TARGET.INNERHTML == '='){
            STRING = EVAL(STRING);
            INPUT.VALUE = STRING;
        }

        else if(E.TARGET.INNERHTML == 'AC'){
            STRING = "";
            INPUT.VALUE = STRING;
        }
        else if(E.target.innerhtml == 'del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
        STRING += E.TARGET.INNERHTML;
        INPUT.VALUE = STRING;
        }
      
    })
})        