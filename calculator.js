let inputMem = "";
let parenthesisMem = 0;
let dotMem = 0;

function appendNum(num) {
    console.log(`${inputMem.length} = ${inputMem}`);

    if(inputMem.length > 50) {
        document.getElementById("cal-input").innerText = `Enough!`;
    } else {
        inputMem += num;
        document.getElementById("cal-input").innerText = inputMem;
    }
}

function appendOp(op) {
    console.log(`${op}`);

    if(inputMem.length > 50) {
        document.getElementById("cal-input").innerText = `Enough!`;
    } else {
        if(inputMem.length == 0){
            if(op == "/") {}
            else if(op == "*") {}
            else if(op == ".") {
                inputMem += `0${op}`;
            } else {
                inputMem += op;                
            }
        } else if(inputMem.length == 1){
            if((inputMem[inputMem.length-1] == "-" || inputMem[inputMem.length-1] == "+") &&
                (op == "-" || op == "+")) {
                inputMem = op;
            } else {
                
                inputMem += op;                
            }
        } else {
            if(inputMem[inputMem.length-1] == "/" || inputMem[inputMem.length-1] == "*") {
                if(op == "-" || op == "+") {
                    inputMem += op;                    
                } else if(op == "."){
                    inputMem += `0${op}`;    
                }
            } else if(inputMem[inputMem.length-1] == "-") {}
            else if(inputMem[inputMem.length-1] == "+") {}
            else if(inputMem[inputMem.length-1] == ".") {
                inputMem += `0${op}`;
            }
            else {
                inputMem += op;
                // dotMem--;
                // if(dotMem == 0) {
                //     inputMem += op;
                // }
            }
        }
        document.getElementById("cal-input").innerText = inputMem;
    }
    console.log(`${inputMem.length} = ${inputMem}`);
}

document.getElementById("zero").onclick = function() {appendNum("0");};

document.getElementById("one").onclick = function() {appendNum("1");};

document.getElementById("two").onclick = function() {appendNum("2");};

document.getElementById("three").onclick = function() {appendNum("3");};

document.getElementById("four").onclick = function() {appendNum("4");};

document.getElementById("five").onclick = function() {appendNum("5");};

document.getElementById("six").onclick = function() {appendNum("6");};

document.getElementById("seven").onclick = function() {appendNum("7");};

document.getElementById("eight").onclick = function() {appendNum("8");};

document.getElementById("nine").onclick = function() {appendNum("9");};


document.getElementById("divide").onclick = function() {appendOp("/");};
    
document.getElementById("multiply").onclick = function() {appendOp("*");};

document.getElementById("subtract").onclick = function() {appendOp("-");};

document.getElementById("add").onclick = function() {appendOp("+");};

document.getElementById("dot").onclick = function() {appendOp(".");};


document.getElementById("parenthesis").onclick = function() {
    console.log(`${inputMem.length} = ${inputMem}`);

    if(inputMem.indexOf("(") == -1 && inputMem.length == 0) {
        parenthesisMem++;
        inputMem += "(";
    }else if(inputMem.indexOf("(") == -1) {
        parenthesisMem++;
        inputMem += "(";
    }else if(inputMem.indexOf("(") != -1){
        if(inputMem[inputMem.length - 1] != "(" && parenthesisMem > 0) {
            parenthesisMem--;
            inputMem += ")";
        } else {
            parenthesisMem++;
            inputMem += "(";   
        }
    }
    document.getElementById("cal-input").innerText = inputMem;
    // if(inputMem.indexOf("(") == -1 && inputMem.length == 0) {
    //     parenthesisMem++;
    //     inputMem += "(";
    // }else if(inputMem.indexOf("(") == -1) {
    //     if(inputMem[inputMem.length - 1] == "-" || inputMem[inputMem.length - 1] == "+"){
    //         parenthesisMem++;
    //         inputMem += "(";
    //     } else {
    //         parenthesisMem++;
    //         inputMem += "*(";
    //     }
    // }else if(inputMem.indexOf("(") != -1){
    //     if(inputMem[inputMem.length - 1] != "(" && parenthesisMem > 0) {
    //         parenthesisMem--;
    //         inputMem += ")";
    //     } else {
    //         if(inputMem[inputMem.length - 1] == "-" || inputMem[inputMem.length - 1] == "+"){
    //             parenthesisMem++;
    //             inputMem += "(";
    //         } else {
    //             parenthesisMem++;
    //             inputMem += "*(";
    //         }   
    //     }
    // }
};
   
document.getElementById("allclear").onclick = function() {
    inputMem = "";
    document.getElementById("cal-input").innerText = inputMem;
    console.clear();
};

document.getElementById("clear").onclick = function() {
    inputMem = inputMem.slice(0, inputMem.length - 1);
    document.getElementById("cal-input").innerText = inputMem;
};
    
document.getElementById("equals").onclick = function() {
    if(inputMem.length != 0) {
        try{
            document.getElementById("cal-input").innerText = `= ${eval(inputMem)}`;
            inputMem = `${eval(inputMem)}`;
        } catch(err) {
            document.getElementById("cal-input").innerText = `Invalid format`;
            inputMem = "";
            // setTimeout(function(){
            //     document.getElementById("cal-input").innerText = "";
            // },2000);
        }
    } else {
        document.getElementById("cal-input").innerText = `Put something here`;
    }
};
    